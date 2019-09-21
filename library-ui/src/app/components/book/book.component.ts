import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  authors: Author[];
  categories: String[];
  bookForm: FormGroup;
  validMessage: string = "";

  constructor(private bookService: BookService, private authorService: AuthorService) { 
    authorService.getAuthors().subscribe(response => {
      this.authors = response.map(item => {
        return new Author(
          item.id,
          item.name
        );
      })
    })

    bookService.getCategories().subscribe(response => {
      this.categories = response.map(item => {
        return new String(item);
      })
    })
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      issueDate: new FormControl(null, Validators.required)
    });
  }

  bookRegistration() {
    if(this.bookForm.valid) {
      this.validMessage = "Your book registration has been submited";
      this.bookService.createBook(this.bookForm.value).subscribe(
        data => {
          this.bookForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
