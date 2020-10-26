import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   users: User [];

  constructor(private httpClient: HttpClient) {
  }
    getAllUsers(): Observable<User []> {
   return this.httpClient.get<User []>('https://jsonplaceholder.typicode.com/users');

    }

}
