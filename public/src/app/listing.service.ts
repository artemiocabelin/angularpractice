import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListingService {

  constructor(private _http: Http) { }

  getUsers() {
    console.log('service is now sending a request to get all users');
    return this._http.get('api/users')
      .map(response => response.json())
      .toPromise();
  }

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

  retrieveUserById(userId) {
    return this._http.get('api/users/' + userId)
      .map(response => response.json())
      .toPromise();
  }

  logoutCurrentUser() {
    console.log('service logging user out');
    return this._http.get('api/users/logout')
      .map(response => response.json())
      .toPromise();
  }

  creatItemForUser(itemData) {
    console.log('service is now making a request to create Item');
    return this._http.post('api/items/create', itemData)
      .map(response => response.json())
      .toPromise();
  }

  undoItemById(itemId) {
    console.log('service is now making a request to undo Item');
    return this._http.post('api/items/undo', itemId)
      .map(response => response.json())
      .toPromise();
  }

  completeItemById(itemId) {
    console.log('service is now making a request to complete Item');
    return this._http.post('api/items/complete', itemId)
      .map(response => response.json())
      .toPromise();
  }

  removeItemById(itemId) {
    console.log('service is now making a request to complete Item');
    return this._http.post('api/items/remove', itemId)
      .map(response => response.json())
      .toPromise();
  }
}
