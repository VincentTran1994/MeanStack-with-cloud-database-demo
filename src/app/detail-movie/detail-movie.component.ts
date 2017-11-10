import { list } from './../../list';
import { Http,Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  list : list[];
  urlAPI: string;
  title: string;
  
  constructor(private route: ActivatedRoute, private http: Http) {
    
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


  ngOnInit() {
    
      
  }

}
