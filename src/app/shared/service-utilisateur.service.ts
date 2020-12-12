import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtilisateurService {
url = 'http://localhost:3000/utilisateurs/';
  constructor(private http: HttpClient) { }
   getUtilisateur(){
    return this.http.get<Utilisateur[]>(this.url);
  }
  deleteUtilisateur(id: string){
    return this.http.delete(this.url + id);
  }

  addUtilisateur(u: Utilisateur){
    
    return this.http.post(this.url,u);
    console.log(u); 
  }

  searchUtilisateur(id){
    return this.http.get(this.url + id);
  }
}
 