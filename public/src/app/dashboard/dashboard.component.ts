import { Router } from '@angular/router';
import { ListingService } from './../listing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: object = {};
  constructor(private _listingService: ListingService, private _router: Router) {
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

  ngOnInit() {
  }

}
