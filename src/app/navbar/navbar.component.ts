import { Http, Response } from '@angular/http';
import { API } from './../API.service';
import { list } from './../../list';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent {
  //declare lists
  lists : list[];
  onClick = false;
  urlAPI : string;

  constructor(private http: Http) {
    // this.http.get()
    // .subscribe(listSearch => this.lists = listSearch);
  }
  
  movieSearch: String;

  onSubmit(f){
    console.log(f.value.movieSearch);
    this.movieSearch = f.value.movieSearch;
    this.urlAPI = 'http://www.omdbapi.com/?s=' + f.value.movieSearch + '&apikey=thewdb';

    this.http.get(this.urlAPI)
      .subscribe((lists: Response) => {
        this.lists = lists.json().Search;
        console.log(this.lists);
      });

    f.value.movieSearch = '';
    this.onClick = true;
  }

}
