import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/Animal';
import { ServiceAnimalService } from '../shared/service-animal.service';

@Component({
  selector: 'app-trouve',
  templateUrl: './trouve.component.html',
  styleUrls: ['./trouve.component.css']
})
export class TrouveComponent implements OnInit {
  listAnimals: Animal[];
  animal: Animal;
  cal: number;
  state: boolean;
  animalUp: Animal;
  s: boolean;
  
  constructor(private service: ServiceAnimalService) { }

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
    this.cal=this.service.getStat(this.listAnimals,'etat',"2");
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
