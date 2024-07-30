import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces/post-interfaces/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(response => this.posts = response);
  }

}
