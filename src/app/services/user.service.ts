import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/user-interfaces/IUser";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  getById(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/' + id);
  }


}
