import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../model/Animal';
import { Utilisateur } from '../model/Utilisateur';
import { ServiceAnimalService } from '../shared/service-animal.service';
import { ServiceUtilisateurService } from '../shared/service-utilisateur.service';

@Component({
  selector: 'app-details-animal',
  templateUrl: './details-animal.component.html',
  styleUrls: ['./details-animal.component.css']
})
export class DetailsAnimalComponent implements OnInit {
  id: string;
  animal: Animal;
  listAnimals: Animal[];
  personne: Utilisateur;
  idC:string;
  listPersonne: Utilisateur[];
  constructor(private serviceRoute: ActivatedRoute, private service: ServiceAnimalService, private serviceU: ServiceUtilisateurService) { }

  ngOnInit(): void {
    this.personne= new Utilisateur;
    this.service.getAnimals().subscribe(
      (data: Animal[]) => this.listAnimals = data
    ); 
    this.serviceU.getUtilisateur().subscribe(
      (data: Utilisateur[]) => this.listPersonne = data
    ); 

    this.id=this.serviceRoute.snapshot.params.id;


    this.service.searchAnimal(this.id).subscribe(
      (data: Animal) =>  this.serviceU.searchUtilisateur(data.idClient).subscribe(
        (data: Utilisateur) => this.personne=data
      )
    );


    
  }
}
