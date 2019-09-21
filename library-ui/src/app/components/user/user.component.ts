import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  books: Book[];
  userForm: FormGroup;
  validMessage: string = "";

  constructor(private userService: UserService, private bookService: BookService) {
    bookService.getBooks().subscribe(response => {
      this.books = response.map(item => {
        return new Book(
          item.id,
          item.category,
          item.issueDate,
          item.title,
          item.authorId
        );
      })
    })
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      booksRented: new FormArray([])
    });
  }

  userRegistration() {
    if(this.userForm.valid) {
      this.validMessage = "Your user registration has been submited";
      this.userService.createUser(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
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
