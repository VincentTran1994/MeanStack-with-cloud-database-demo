import { ListOrdersService } from './../list-orders.service';
import { ContactService } from './../contact.service';
import { contact } from './../../contact';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  }


  onSubmit(f: NgForm) {
    this.contacts.push(f.value);
    this.contactService.addContact(f.value)
      .subscribe(contact => {
            // f.value.name = "";
            // f.value.email = "";
            // f.value.phone = "";
            // f.value.request = "";
            f.resetForm();
        }
      );
      
  }

  onDelete(id) {
      var contacts = this.contacts;
      this.contactService.deleteContact(id)
        .subscribe(contact => {
            for (var i = 0; i < contacts.length; i++) {
                if (id == contacts[i]._id) {
                    contacts.splice(i, 1);
                }
            }
        });
  }

}
