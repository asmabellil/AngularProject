import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../model/Contact';

@Component({
  selector: 'app-messages-fils',
  templateUrl: './messages-fils.component.html',
  styleUrls: ['./messages-fils.component.css']
})
export class MessagesFilsComponent implements OnInit {
  @Input() contact: Contact;
  @Output() notifSup= new EventEmitter<Contact>();
  constructor() { }

  ngOnInit(): void {
  }
  sendSupprim(){
    this.notifSup.emit(this.contact);
  }

}
