import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Animal } from '../model/Animal';
import { ServiceAnimalService } from '../shared/service-animal.service';

@Component({
  selector: 'app-animal-fils',
  templateUrl: './animal-fils.component.html',
  styleUrls: ['./animal-fils.component.css']
})
export class AnimalFilsComponent implements OnInit {
  listAnimals: Animal[];
  animals: Animal;
  state: boolean;
  val: string;
  @Input() animal: Animal;
  @Output() notification= new EventEmitter<Animal>();
  @Output() notificationModifier= new EventEmitter<Animal>();
  @Output() notifstate=new EventEmitter<boolean>();
  constructor(private service: ServiceAnimalService) { }
  myimage;
  ngOnInit(): void {
    this.state=false;
    this.service.getAnimals().subscribe(
      (data: Animal[]) => this.listAnimals = data
    );   
  }

  sendNotif(){
    this.notification.emit(this.animal);
  }

  update(){
    
    this.notificationModifier.emit(this.animal);
  }

  send(){
    this.notifstate.emit(this.state);
  }


}
