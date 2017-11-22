import { ListOrdersService } from './../list-orders.service';
import { ContactService } from './../contact.service';
import { contact } from './../../contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts : contact[];
  constructor(private contactService: ContactService) { 
    this.contactService.getContacts()
      .subscribe(contacts =>{
        this.contacts = contacts;
      });
      console.log(this.contacts);
  }

  onSubmit(f){
    
    this.contactService.addContact(f.value)
      .subscribe(contact => {
        f.value.name = "";
        f.value.email = "";
        f.value.phone = "";
        f.value.request = "";
        }
      );

      this.contacts.push(f.value);
  }

}
