import { list } from './../../list';
import { Http,Response,Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOrdersService } from '../list-orders.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {
  list : list[];
  urlAPI: string;
  title: string;

  constructor(private route: ActivatedRoute,
              private http: Http,
              private ListOrdersService: ListOrdersService) {

    this.route.paramMap.
      subscribe(params => {
        let id = params.get('id');


      //getting data from API
      this.urlAPI = 'http://www.omdbapi.com/?i=' + id + '&apikey=thewdb';
      this.http.get(this.urlAPI)
        .subscribe((lists: Response)=> {
          this.list = lists.json();
          this.title = lists.json().Title;
        });
    });

  }

  addList(){
    var newList = this.list;
    this.ListOrdersService.createList(newList)
      .subscribe(list => {
        //do something here
      });
  }

}
