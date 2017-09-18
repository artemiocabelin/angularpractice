import { User } from './../user';
import { ListingService } from './../listing.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  user;
  subscription: Subscription;
  otherUsers = [];
  allUsers = [];
  currentUser: User;
  constructor(private _route: ActivatedRoute, private _listingService: ListingService, private _router: Router) {
    this.setCurrentUser();
   }
  ngOnInit() {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        console.log('got params id: ' + params.get('uid'));
        return this._listingService.retrieveUserById(params.get('uid'))
    }).subscribe(user => {
      this.user = user;
      console.log(this.user);
      if(this.user.username === this.currentUser.username ) {
        this._router.navigate(['/dashboard']);
      }
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this._listingService.getUsers()
      .then((data) => {
        console.log('got then response for get users');
        this.allUsers = data;
        console.log(this.allUsers);
        this.sortUsers(this.allUsers);
      })
      .catch((error) => {
        console.log('got catch response for get users');
        console.log(error);
      });
  }

  sortUsers(users) {
    this.otherUsers = [];
    for(let buser of users) {
      if(buser.username !== this.user.username) {
        this.otherUsers.push(buser);
      }
    }
    console.log(this.otherUsers);
  }

  ngOnDestroy() { 
    this.subscription.unsubscribe();
  }

  setCurrentUser() {
    this._listingService.getCurrentUser()
      .then((data) => {
        console.log('got then response');
        this.currentUser = data;
        console.log(this.currentUser);
      })
      .catch((error) => {
        console.log('got catch response');
        console.log(error);
        if (error.status === 401) {
          this._router.navigate(['']);
        }
      });
  }

}
