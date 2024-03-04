import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersApiService {

  private usersURL = ' https://jsonplaceholder.typicode.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.usersURL+'/users/')
  }

  delete(id: any) {
    return this.httpClient.delete(this.usersURL+'/users/'+id)
  }
}
