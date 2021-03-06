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
  mapDropDown = false;

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
            f.resetForm();
        }
      );
    alert("Your request have been submit! Thank you!");
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

  onDetail(id){
    
  }

  faOnClick(){
    console.log("clicked");
    this.mapDropDown = !this.mapDropDown;
  }
}
