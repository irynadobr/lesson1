import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment [];

  constructor(private httpClient: HttpClient) {
  }

  AllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
