import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Animal } from '../model/Animal';
import { ServiceAnimalService } from '../shared/service-animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  animal: Animal;
  etats: string[];
  listAnimals: Animal[];
  long: number;
  myimage : Observable<any>;
  idA: number;
  @Input() animalUpIn : Animal;
  @Input() s1: boolean;
  @Input() state: boolean;
  @Output() updateAnimal= new EventEmitter<Animal>();


  constructor(private service: ServiceAnimalService) { }

  ngOnInit(): void {
    this.animal= new Animal;
    this.service.getAnimals().subscribe(
      (data: Animal[]) => this.listAnimals = data
    );    
    
  }

  deleteA(id: number){
    this.service.deleteAnimal(id).subscribe(
      () => this.listAnimals = this.listAnimals.filter(animal => animal.id != id)
    ); 
  }

  save(){
    
    this.service.addAnimal(this.animal).subscribe(
      //() => this.listAnimals = [this.animal, ...this.listAnimals]);
      () => this.listAnimals.push(this.animal));
      console.log(this.animal);
      console.log(this.listAnimals);
      alert("Animal bien ajouté");
} 

  generer(){
    this.service.getAnimals().subscribe(
      (data: Animal[]) => this.long = (data.length +1)
    );
    return(this.long );
  }

  generation(){
    this.long=this.generer();
  }

    onChange($event: Event) {
      const file = ($event.target as HTMLInputElement).files[0];
      this.convertToBase64(file);
    }
  
    convertToBase64(file: File) {
      this.myimage = new Observable((subscriber: Subscriber<any>) => {
        this.readFile(file, subscriber);
      });
    }
  
    readFile(file: File, subscriber: Subscriber<any>) {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
  
      filereader.onload = () => {
        subscriber.next(filereader.result);
        subscriber.complete();
      };
      filereader.onerror = (error) => {
        subscriber.error(error);
        subscriber.complete();
      };
    }

    modifierA(anim:Animal){
      anim.id=this.animalUpIn.id;
      this.service.updateAnimal(anim.id,anim).subscribe((animal)=>anim=animal );
      this.updateAnimal.emit(anim);
      console.log(anim);
    }

    get(){
      
    }


}
