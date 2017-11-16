import { list } from './../list';
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListOrdersService {
  list: list;
  constructor(private http: Http) {       
   }
  
  // http://localhost:3000/api/tasks
  //using API instead of using data base
  // http://www.omdbapi.com/?s=Texas&apikey=thewdb

  //getting data from database as an api
   getList(){
     return this.http.get('http://localhost:3000/api/tasks')
      .map(res => res.json());
   }

   //creating a single list then add into the database
   createList(newTask){
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     
     return this.http.post('http://localhost:3000/api/task',
      JSON.stringify(newTask),{headers:headers})
      .map(res => res.json());
   }

   //delete a single list
   delete(id){
     return this.http.delete("http://localhost:3000/api/task/" + id)
      .map(res => res.json());
   }


   
}
