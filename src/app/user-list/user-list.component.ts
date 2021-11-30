import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.modele';
import { userService } from '../services/user.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  @Input() users!:User[];
  userSubscription!:Subscription;
 
  constructor(private userService:userService)
   { } 
   ngOnInit() 
   {
      this.userSubscription = this.userService.userSubject.subscribe
      (
        (users: User[]) => {
          this.users = users;
        }
      );
      this.userService.emitUsers();
   }



  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


}
