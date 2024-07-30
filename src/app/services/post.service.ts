import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces/post-interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  getById(id: string): Observable<IPost>{
    return this.http.get<IPost>(this.url + '/' + id);
  }
}
