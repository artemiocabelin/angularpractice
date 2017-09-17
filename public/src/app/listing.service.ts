import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListingService {

  constructor(private _http: Http) { }

  loginUserButCreateIfNotFound(userData) {
    console.log('service is now sending a post request to server for login');
    return this._http.post('api/users/login', userData)
      .map(response => response.json())
      .toPromise();
  }

  getCurrentUser() {
    console.log('service getting current User');
    return this._http.get('api/users/current')
      .map(response => response.json())
      .toPromise();
  }

  logoutCurrentUser() {
    console.log('service logging user out');
    return this._http.get('api/users/logout')
      .map(response => response.json())
      .toPromise();
  }
}
