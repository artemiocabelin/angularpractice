import { Router } from '@angular/router';
import { ListingService } from './listing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: Boolean;
  constructor(private _listingService: ListingService, private _router: Router) {
    this.setAppComponent();
  }

  logoutUser() {
    this._listingService.logoutCurrentUser()
      .then((data) => {
        console.log('successful logout');
        this.setAppComponent();
        this._router.navigate(['']);
      })
      .catch((error) => {
        console.log('error logging out');
        console.log(error);
      });
  }

  setAppComponent() {
    console.log('setting app component');
    this._listingService.getCurrentUser()
      .then((data) => {
        console.log('currently logged in');
        this.loggedIn = true;
      })
      .catch((error) => {
        console.log('not logged in');
        console.log(error);
        if (error.status === 401) {
          this.loggedIn = false;
        }
      });
  }
}
