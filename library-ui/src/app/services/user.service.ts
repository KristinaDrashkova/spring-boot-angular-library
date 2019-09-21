import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get('/server/users/get');
  }

  getUser(id: number) {
    return this.http.get('/server/users/get?' + id);
  }

  createUser(user: object) {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post('/server/users/add', body, httpOptions);
  }
}
