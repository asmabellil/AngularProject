import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { ServiceUtilisateurService } from '../shared/service-utilisateur.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Utilisateur[];
  client: Utilisateur;
  constructor(private serviceU: ServiceUtilisateurService) { }

  ngOnInit(): void {
    this.serviceU.getUtilisateur().subscribe(
      (data: Utilisateur[]) => this.clients = data);     
  }

  supprimerClient(client: Utilisateur){
    let i= this.clients.indexOf(client);
    this.serviceU.deleteUtilisateur(this.clients[i].id).subscribe(
      () => this.clients = this.clients.filter(animal => animal.id != this.clients[i].id)
    ); 
  }

}
