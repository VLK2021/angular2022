import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../interfaces/comment-interfaces/IComment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(response => this.comments = response);
  }

}
