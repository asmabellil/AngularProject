import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Animal } from '../model/Animal';
import { ServiceAnimalService } from '../shared/service-animal.service';

@Component({
  selector: 'app-perdu',
  templateUrl: './perdu.component.html',
  styleUrls: ['./perdu.component.css']
})
export class PerduComponent implements OnInit {
  cal: number;
  constructor(private service: ServiceAnimalService) { }
  listAnimals: Animal[];
  animal: Animal;
  myimage;
  state: boolean;
  animalUp: Animal;
  s: boolean;

  ngOnInit(): void {
    this.service.getAnimals().subscribe(
      (data: Animal[]) => this.listAnimals = data
    );
 
  }
  deleteA(animal : Animal){ 
    let i= this.listAnimals.indexOf(animal);
    this.service.deleteAnimal(this.listAnimals[i].id).subscribe(
      () => this.listAnimals = this.listAnimals.filter(animal => animal.id != this.listAnimals[i].id)
    ); 
  }

  calcul(){
    this.cal=this.service.getStat(this.listAnimals,'etat',"3");
  }

  updateAjour(a: Animal){
    this.listAnimals.filter(x=>x.id==a.id)[0].idClient=a.idClient;
    this.listAnimals.filter(x=>x.id==a.id)[0].nom=a.nom;
    this.listAnimals.filter(x=>x.id==a.id)[0].race=a.race;
    this.listAnimals.filter(x=>x.id==a.id)[0].age=a.age;
    this.listAnimals.filter(x=>x.id==a.id)[0].prix=a.prix;
    this.listAnimals.filter(x=>x.id==a.id)[0].photo=a.photo;
    this.listAnimals.filter(x=>x.id==a.id)[0].etat=a.etat;
    this.listAnimals.filter(x=>x.id==a.id)[0].description=a.description;
    console.log(3);
    }

    modifierA(animal: Animal){
      this.animalUp=animal;
      this.s=true;
     
    }
    
    sendState(){
      
       this.state=true;
    }  

}
