import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';
import { ServiceContactService } from '../shared/service-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact;
  listContacts: Contact[];

  constructor(private service: ServiceContactService) { }

  ngOnInit(): void {
    this.contact= new Contact;
    this.service.getMessages().subscribe(
      (data: Contact[]) => this.listContacts = data
    );  
  }
  save(contact: Contact){
    this.service.addMessage(this.contact).subscribe(
      () => this.listContacts = [this.contact, ...this.listContacts]);
      alert("Votre message a été bien envoyé");
  }

}
