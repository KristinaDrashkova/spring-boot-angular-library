import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author } from '../models/author';
 
const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('/server/authors/get');
  }

  getAuthor(id: number) {
    return this.http.get('/server/authors/get?' + id);
  }

  createAuthor(author: object) {
    let body = JSON.stringify(author);
    console.log(body);
    return this.http.post('/server/authors/add', body, httpOptions);
  }
}
