import { Http,Response } from '@angular/http';
import { list } from './../../list';
import { ListOrdersService } from './../list-orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { swal}  from 'sweetalert';

@Component({
  selector: 'list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent {
  // listNumber = [1,2,3,4,5];
  lists: list[];
  list: list;
  id: string;
  constructor(private ListOrdersService: ListOrdersService, 
              private route: ActivatedRoute,
              private http: Http ) {
    
    //get list of orders from database
    this.ListOrdersService.getList()
    .subscribe(lists => {
      this.lists=lists;      
    });
  }
    
  //delete route
  onDelete(id){
    // swal("Hello World");
    var lists = this.lists;
    
    this.ListOrdersService.delete(id)
      .subscribe( data => {
        // if(data.n==1)
        for(var i = 0 ; i < lists.length ; i++){
          if(id == lists[i]._id){
            lists.splice(i,1);
          }
        }
      });
  }

}
