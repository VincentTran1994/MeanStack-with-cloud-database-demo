import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListOrdersService {

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
}
