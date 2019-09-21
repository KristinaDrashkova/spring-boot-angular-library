import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { AuthorService } from "../../services/author.service";
import { BookService } from "../../services/book.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authorForm: FormGroup;
  validMessage: string = "";

  constructor(private userService: UserService, private authorService: AuthorService, private bookService: BookService) {
    
   }

  ngOnInit() {
    this.authorForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  authorRegistration() {
    if(this.authorForm.valid) {
      this.validMessage = "Your author registration has been submited";
      this.authorService.createAuthor(this.authorForm.value).subscribe(
        data => {
          this.authorForm.reset();
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
