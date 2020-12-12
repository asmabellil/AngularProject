import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/Animal';
import { ServiceUtilisateurService } from './service-utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAnimalService {
  url = 'http://localhost:3000/animals/';

  constructor(private http: HttpClient) { }
  getAnimals(){
    return this.http.get<Animal[]>(this.url);
  }
  deleteAnimal(id: number){
    return this.http.delete(this.url + id);
  }

  addAnimal(a: Animal){
    
    return this.http.post(this.url, a);
    console.log(a); 
  }

    searchAnimal(id){
    return this.http.get(this.url + id);
  }

  getStat(list: any[], criteria: string, value: any) {
    let n = 0;
    for (let i in list) {
      if(list[i][criteria] === value){
        n++;
      }
    }
    return n;
  }

  updateAnimal(id:number,a: Animal):Observable<Animal>{

    return this.http.put<Animal>(this.url+id,a);
  }

  search(list: any[],criteria: string, value: any){
    for (let l in list){
      if(list[l][criteria]==value)
      {
        return list.filter(x => x[criteria]==[value])
    }
    }
  }


}
