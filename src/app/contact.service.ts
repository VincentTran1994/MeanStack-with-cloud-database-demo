
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //get list of contacts
  getContacts(){
    return this.http.get("http://localhost:3000/api/contacts")
     .map(res => res.json());
  }
  //creating a new contact
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/api/contact", 
      JSON.stringify(newContact), {headers: headers})
     .map(res => res.json());
  }

  //delete contact
  deleteContact(id){
    this.http.delete("http://localhost:3000/api/contact" + id)
      .map(res => res.json());
  }
}
