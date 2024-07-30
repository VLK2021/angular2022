import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IUser} from "../../interfaces/user-interfaces/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  @Output()
  lift = new EventEmitter<IUser>();


  constructor() {
  }

  ngOnInit(): void {
  }

  getDetails() {
    this.lift.emit(this.user);
  }
}
