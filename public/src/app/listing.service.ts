import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListingService {

  constructor(private _http: Http) { }

  loginUserButCreateIfNotFound(userData) {
    console.log(userData);
    console.log('service is now sending a post request to server for login');
    return this._http.post('api/users/login', userData)
      .map(response => response.json())
      .toPromise();
  }
}
