import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../model/Utilisateur';
import { ServiceUtilisateurService } from '../shared/service-utilisateur.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  registerForm: FormGroup;
  utilisateur: Utilisateur;
  listUtilisateurs: Utilisateur[];
  formState: boolean;
  long: number;
  verif: boolean;
  idC:string;
  mdpC:string;
  mdptest:string;

  constructor(private service: ServiceUtilisateurService) { }

  ngOnInit(): void {
    this.verif=false;
    this.formState=false;
    this.registerForm= new FormGroup({
    id: new FormControl('',Validators.required),
    mdp: new FormControl('',[Validators.required,Validators.minLength(6)]),
    nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
    prenom: new FormControl('',[Validators.required,Validators.minLength(3)]),
    cin: new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
    adresse: new FormControl('',[Validators.required,Validators.pattern('[0-9]+ [a-zA-Z ]+ [0-9]+')]),
    numTel: new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
    description: new FormControl('',Validators.required)
    });

    this.utilisateur= new Utilisateur;
    this.service.getUtilisateur().subscribe(
      (data: Utilisateur[]) => this.listUtilisateurs = data
    );    
  }
  get id() {return this.registerForm.get('id')};
  get mdp() {return this.registerForm.get('mdp')};
  get nom() {return this.registerForm.get('nom')};
  get prenom() {return this.registerForm.get('prenom')};
  get cin() {return this.registerForm.get('cin')};
  get adresse() {return this.registerForm.get('adresse')};
  get numtel() {return this.registerForm.get('numTel')};

  save(){
    
    this.service.addUtilisateur(this.utilisateur).subscribe(
      () => this.listUtilisateurs = [this.utilisateur, ...this.listUtilisateurs]);
      //() => this.listAnimals.push(this.animal));
      console.log(this.utilisateur);
      console.log(this.listUtilisateurs);
      alert("Felicitations vous êtes inscrit");
    }
    
    show(){
      this.formState = true;
    }

    generer(){
      this.service.getUtilisateur().subscribe(
        (data: Utilisateur[]) => this.long = (data.length +1)
      );
      return(this.long );
    }
  
    generation(){
      this.long=this.generer();
    } 

    verifier(){
      this.service.searchUtilisateur(this.idC).subscribe(
        (data: Utilisateur) => {if(data.mdp == this.mdpC){this.verif=true;alert("Bienvenue Vous etes connecté");}else{alert("Rsseyez s'il vous plait");}
      localStorage.setItem("user",JSON.stringify(data))}
      );
      console.log(this.idC);
      console.log(this.mdpC);
      console.log(this.verif);
    }
}
