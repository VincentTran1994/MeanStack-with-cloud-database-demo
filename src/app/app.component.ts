// import { Http } from '@angular/http';
import { element } from 'protractor';

import { API } from './API.service';
import { ListOrdersService } from './list-orders.service';
import { Component, Input, Output } from '@angular/core';
import { list } from '../list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ListOrdersService,API]
})
export class AppComponent {
  // homePage = false;
  // listOrder = false;
  // schedule = false;
  
  //declare lists
  lists : list[];

  constructor(private api: API){
    console.log("API is declared!")
    // get list of orders from API
    this.api.getListMovieFromAPI()
      .subscribe(lists => {
        this.lists= lists.Search;
        console.log("This is the saved listsfrom API: ");
        console.log(this.lists);
    });  
  }

   
}
