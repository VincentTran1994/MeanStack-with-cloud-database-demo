import { list } from './../list';
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListOrdersService {
  list: list;
  constructor(private http: Http) {       
    console.log('Task service initizalies...');
   }
  
  // http://localhost:3000/api/tasks
  //using API instead of using data base
  // http://www.omdbapi.com/?s=Texas&apikey=thewdb
   getList(){
     return this.http.get('http://localhost:3000/api/tasks')
      .map(res => res.json());
   }

   //creating a single list then add into the database
   createList(newTask){
    
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     console.log("From service");
     console.log(newTask);
     console.log("This is being pushed successfully...");
     return this.http.post('http://localhost:3000/api/task',
      JSON.stringify(newTask),{headers:headers})
      .map(res => res.json());
   }
 
}
