import { list } from './../../list';
import { ListOrdersService } from './../list-orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent {
  // listNumber = [1,2,3,4,5];
  lists: list[];
  
  constructor(private ListOrdersService: ListOrdersService) {
    //get list of orders from database
    this.ListOrdersService.getList()
    .subscribe(lists => {
      this.lists=lists;
    });  
   }

}
