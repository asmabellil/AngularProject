import { Component } from '@angular/core';
import { Utilisateur } from './model/Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal';
  user : Utilisateur;
  login(){
    if(localStorage.getItem("user")!=null){
      this.user = JSON.parse(localStorage.getItem("user"))
      if(this.user.description=="admin"){
        return 1;
      }
      else
        return 2;
    } else
        return 3;
  }

  deconnecter(){
    localStorage.removeItem("user");
  }
}
