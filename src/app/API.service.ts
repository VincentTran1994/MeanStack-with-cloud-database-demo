
// import { NavbarComponent } from './../../../Dulication/src/client/app/navbar/navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { list } from '../list';


@Injectable()
export class API{
    lists: list[];
    // private search : NavbarComponent;
    constructor(private http: Http){
        // console.log(search1.getMovieSearch());
    }

    // urlAPI : string = 'http://www.omdbapi.com/?s=' + this.search.getMovieSearch() + '&apikey=thewdb';
    // urlAPI = 'http://www.omdbapi.com/?s=california&apikey=thewdb'
    getListMovieFromAPI(){
        // console.log(this.search.getNumber());
        // return this.http.get(this.urlAPI)
        // .map(res => res.json());
        // get list of orders from API
        return this.http.get('http://www.omdbapi.com/?s=california&apikey=thewdb')
        .map(res => res.json());
    }  
     //trying to do for the get and post routing database in order to use the API
     //fixed at app.component.ts
}