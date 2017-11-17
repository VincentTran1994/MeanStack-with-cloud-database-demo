import { Http, Response } from '@angular/http';
import { list } from './../../list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent {
  //declare lists
  listsSearch : list[];
  dropDown = false;
  urlAPI : string;
  movieSearch: String;
  searchWidth = true;

  constructor(private http: Http) {
    // this.http.get()
    // .subscribe(listSearch => this.lists = listSearch);
  }
  

  onKeyPress($event){
    
      this.urlAPI = 'http://www.omdbapi.com/?s=' + this.movieSearch + '&apikey=thewdb';
      
      this.http.get(this.urlAPI)
        .subscribe((lists: Response) => {
          this.listsSearch = lists.json().Search;
        });
  }

  onfocus(){
    this.dropDown = !this.dropDown;
    if(this.dropDown)
      this.searchWidth = false;
    else 
      this.searchWidth = true;
  }

  onblur(){
    // console.log("blur");
    // this.dropDown = !this.dropDown;
  }
}
