import { AppComponent } from './../app.component';
import { ListingService } from './../listing.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user = new User();

  constructor(private _listingService: ListingService, private _router: Router, private _appComponent: AppComponent) {
   }

   onSubmit() {
     console.log('component submitting login');
     this._listingService.loginUserButCreateIfNotFound(this.user)
      .then((response) => {
        console.log('got response');
        console.log(response);
        this._appComponent.setAppComponent();
        this._router.navigate(['dashboard']);
      })
      .catch((error) => {
        console.log('got error');
        console.log(error);
      });
     this.user = new User();
   }
 
  ngOnInit() {
  }

}
