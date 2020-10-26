import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts: Post [];
  constructor(private postService: PostService) {

    this.postService.AllPosts().subscribe(value =>
      this.allPosts = value);
  }
  ngOnInit(): void {
  }

}
