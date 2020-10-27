import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-user-post-id',
  templateUrl: './user-post-id.component.html',
  styleUrls: ['./user-post-id.component.css']
})
export class UserPostIdComponent implements OnInit {
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
