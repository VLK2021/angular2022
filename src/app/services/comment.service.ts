import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../modules/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url ='https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {

  }

  getComment(): Observable<IComment[]> {
    return this
      .http
      .get<any[]>(this.url)
  }

}
