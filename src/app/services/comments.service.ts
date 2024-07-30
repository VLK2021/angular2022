import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces/comment-interfaces/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url: string = 'http://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url);
  }

  getById(id: string): Observable<IComment>{
    return this.http.get<IComment>(this.url + '/' + id);
  }

}
