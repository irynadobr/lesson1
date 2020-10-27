import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts-user-id',
  templateUrl: './all-posts-user-id.component.html',
  styleUrls: ['./all-posts-user-id.component.css']
})
export class AllPostsUserIdComponent implements OnInit {
  postUser: Post [];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.AllPostsUsers(value.id).subscribe(data =>
        this.postUser = data);
    });
  }
  ngOnInit(): void {
  }

}
