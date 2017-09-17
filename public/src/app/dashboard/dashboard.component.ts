import { Item } from './../item';
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
  item: Item = new Item();
  done = [];
  pending = [];
  constructor(private _listingService: ListingService, private _router: Router) {
    this.setDashboardComponent();
   }

  setDashboardComponent() {
    this._listingService.getCurrentUser()
      .then((data) => {
        console.log('got then response');
        this.currentUser = data;
        console.log(this.currentUser);
        this.sortItems(data.items);
      })
      .catch((error) => {
        console.log('got catch response');
        console.log(error);
        if (error.status === 401) {
          this._router.navigate(['']);
        }
      });
  }

  onSubmit() {
    console.log('submitting item create info');
    this._listingService.creatItemForUser(this.item)
      .then(data => {
        console.log('got successful response creating item');
        console.log(data);
        this.setDashboardComponent();
      })
      .catch(error => {
        console.log('got error response creating item');
        console.log(error);
      });
    this.item = new Item();
  }

  ngOnInit() {
  }

  sortItems(items) {
    this.done = [];
    this.pending = [];
    console.log(items);
    for (let item of items){
      if(item.complete) {
        this.done.push(item);
      } else {
        this.pending.push(item);
      }
    }
  }

  undoItem(item_id) {
    let i_id = {id: item_id};
    this._listingService.undoItemById(i_id)
      .then(data => {
        console.log('success');
        console.log(data);
        this.setDashboardComponent();
      })
      .catch(error => {
        console.log('error');
        console.log(error);
      });
  }

  completeItem(item_id) {
    let i_id = {id: item_id};
    this._listingService.completeItemById(i_id)
      .then(data => {
        console.log('success');
        console.log(data);
        this.setDashboardComponent();
      })
      .catch(error => {
        console.log('error');
        console.log(error);
      });
  }

}
