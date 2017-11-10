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

  constructor(private http: Http) {
    // this.http.get()
    // .subscribe(listSearch => this.lists = listSearch);
  }
  
  

  // onSubmit(f){
  //   console.log(f.value.movieSearch);
  //   this.movieSearch = f.value.movieSearch;
  //   this.urlAPI = 'http://www.omdbapi.com/?s=' + f.value.movieSearch + '&apikey=thewdb';

  //   this.http.get(this.urlAPI)
  //     .subscribe((lists: Response) => {
  //       this.listsSearch = lists.json().Search;
  //       console.log(this.listsSearch);
  //     });
  //   this.onClick = true;
  // }

  onKeyPress($event){
    
      this.urlAPI = 'http://www.omdbapi.com/?s=' + this.movieSearch + '&apikey=thewdb';
      
      this.http.get(this.urlAPI)
        .subscribe((lists: Response) => {
          this.listsSearch = lists.json().Search;
        });
  }

  onfocus(){
    this.dropDown = !this.dropDown;
  }
  onblur(){
    // this.dropDown = !this.dropDown;
  }
}
