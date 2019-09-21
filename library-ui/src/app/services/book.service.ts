import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/server/books/get');
  }

  getBook(id: number) {
    return this.http.get('/server/books/get?' + id);
  }

  createBook(book: object) {
    let body = JSON.stringify(book);
    console.log(body);
    return this.http.post('/server/books/add', body, httpOptions);
  }

  getCategories(): Observable<String[]> {
    return this.http.get<String[]>('/server/books/categories');
  }
}
