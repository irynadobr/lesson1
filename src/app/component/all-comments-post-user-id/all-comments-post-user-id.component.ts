import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-all-comments-post-user-id',
  templateUrl: './all-comments-post-user-id.component.html',
  styleUrls: ['./all-comments-post-user-id.component.css']
})
export class AllCommentsPostUserIdComponent implements OnInit {
  commentsPostUser: Comment [];
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.AllCommentsUsers(value.id).subscribe(value1 =>
        this.commentsPostUser = value1);
    });
  }
  ngOnInit(): void {
  }

}
