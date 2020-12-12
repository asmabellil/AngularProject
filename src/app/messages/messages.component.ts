import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';
import { ServiceContactService } from '../shared/service-contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  constructor(private serviceC: ServiceContactService) { }

  ngOnInit(): void {
    this.serviceC.getMessages().subscribe(
      (data: Contact[]) => this.contacts = data);     
  }

  supprimerMessage(message: Contact){
    let i= this.contacts.indexOf(message);
    this.serviceC.deleteMessage(this.contacts[i].id).subscribe(
      () => this.contacts = this.contacts.filter(message => message.id != this.contacts[i].id)
    ); 
  }

}
