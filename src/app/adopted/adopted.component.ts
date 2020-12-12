import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from '../model/Animal';
import { ServiceAnimalService } from '../shared/service-animal.service';

@Component({
  selector: 'app-adopted',
  templateUrl: './adopted.component.html',
  styleUrls: ['./adopted.component.css']
})
export class AdoptedComponent implements OnInit {
  listAnimals: Animal[];
  listRecherche: Animal[];
  listRech: Animal[];
  animalUp: Animal;
  animal: Animal;
  cal: number;
  state: boolean;
  critere:string;
  valeur: any;
  stateRech:boolean;
  s: boolean;

  constructor(private service: ServiceAnimalService) { }

  ngOnInit(): void {
 
    this.stateRech=false;
    this.service.getAnimals().subscribe(
      (data: Animal[]) => this.listAnimals = data
    );    
    
    this.listAnimals=this.service.search(this.listAnimals,this.critere,this.valeur);
   
  }
  deleteA(animal : Animal){ 
    let i= this.listAnimals.indexOf(animal);
    this.service.deleteAnimal(this.listAnimals[i].id).subscribe(
      () => this.listAnimals = this.listAnimals.filter(animal => animal.id != this.listAnimals[i].id)
    ); 
  }

  calcul(){
    this.cal=this.service.getStat(this.listAnimals,'etat',"1");
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

    recherche(){

      this.stateRech=true;
      this.listAnimals=this.service.search(this.listAnimals,this.critere,this.valeur);
      console.log(this.listAnimals);
    }

}
