import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';

@Component({
  selector: 'app-client-fils',
  templateUrl: './client-fils.component.html',
  styleUrls: ['./client-fils.component.css']
})
export class ClientFilsComponent implements OnInit {
  @Input() client: Utilisateur;
  @Output() notifSup= new EventEmitter<Utilisateur>();
  constructor() { }

  ngOnInit(): void {
  }

  sendSupprim(){
    this.notifSup.emit(this.client);
  }
  
  getColor(){
    if (this.client.description=="client")
      return 'pink';
    else
      return 'beige';
  }

}
