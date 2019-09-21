import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public authors;
  public books;
  public users;

  constructor(private authorService: AuthorService, private bookService: BookService, private userService: UserService) { }

  ngOnInit() {
    this.getAuthors;
    this.getBooks;
    this.getUsers;
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe(
      data => { this.authors = data},
      err => console.error(err),
      () => console.log('authors loaded')
    );
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => { this.books = data},
      err => console.error(err),
      () => console.log('books loaded')
    );
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('users loaded')
    );
  }
}
