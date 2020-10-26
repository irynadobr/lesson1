import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User [];
  constructor(private userService: UserService)  {

  this.userService.getAllUsers().subscribe(value =>
  this.users = value);

}
  ngOnInit(): void {
  }


}
