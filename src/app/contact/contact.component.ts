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
  contact : contact;
  constructor(private contactService: ContactService) { }

  onSubmit(f){
    this.contact = f.value;
    this.contactService.addContact(this.contact)
      .subscribe(contact => {
        f.value.name = "";
        }
      );
  }

}
