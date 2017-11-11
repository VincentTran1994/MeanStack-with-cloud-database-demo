import { Http,Response } from '@angular/http';
import { list } from './../../list';
import { ListOrdersService } from './../list-orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    //get id from api
    // this.route.paramMap
    //   .subscribe(
    //     param => {
    //       this.id = param.get('id');//worked here
    //     }
    // );

    // if(this.id != null){
    //   console.log(this.id);
    //   this.getDetailApi();
    //   //after this step the single list get null value
    //   //then the program stop adding the list to the database
    //   console.log(this.list);
    //   if(this.list!=null)
    //     this.addDatabase();
    // }
     
  }
   
   //get detail of a single list from API
  //  getDetailApi(){
  //    console.log("Getting single list from API of " + this.id +" : ");
  //   this.http.get('http://www.omdbapi.com/?i=' + this.id + '&apikey=thewdb')
  //   .subscribe((list: Response) => {
  //     this.list = list.json();
  //     console.log("1");
  //     console.log(this.list);
  //   });
  //  }

   //add list to database
  //  addDatabase(){
  //    console.log("2");
  //    console.log(this.list);
  //   this.ListOrdersService.createList(this.list)
  //   .subscribe(list => {
  //     this.lists.push(list);
  //   });
  //  }
   

}
