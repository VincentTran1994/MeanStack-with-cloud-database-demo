import { Http, Response } from '@angular/http';
import { list } from './../../list';
import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {
  //declare lists
  public listsSearch : list[];
  public dropDown = false;
  public urlAPI : string;
  public movieSearch: String;
  public searchWidth = true;

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
    console.log("drom onforcus: " + this.dropDown);
    if(this.dropDown)
      this.searchWidth = false;
    else
      this.searchWidth = true;
  }

  onblur(){
    console.log("blur");
    this.searchWidth = true;
    
    console.log("from onblur: " + this.dropDown);
    this.dropDown = !this.dropDown;
    this.onfocus();
    // this.movieSearch = "";
    
  }
}
