// import { Http } from '@angular/http';
import { element } from 'protractor';


import { ListOrdersService } from './list-orders.service';
import { Component, Input, Output } from '@angular/core';
import { list } from '../list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ListOrdersService]
})
export class AppComponent {
  // homePage = false;
  // listOrder = false;
  // schedule = false;
  
  //declare lists
  lists : list[];

  constructor(){
     
  }

   
}
