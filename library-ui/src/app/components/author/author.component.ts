import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorForm: FormGroup;
  validMessage: string = "";

  constructor(private authorService: AuthorService) { }

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
