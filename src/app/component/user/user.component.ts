import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';

import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  postUser: Post;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.AllPostsUsers(value.id).subscribe(data =>
        this.postUser = data);
    });
  }
  ngOnInit(): void {
  }
}
