import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AdoptedComponent } from './adopted/adopted.component';
import { PerduComponent } from './perdu/perdu.component';
import { TrouveComponent } from './trouve/trouve.component';
import { PersonneComponent } from './personne/personne.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { ClientsComponent } from './clients/clients.component';
import { MessagesComponent } from './messages/messages.component';


  const ROUTES: Routes=[
    {path:'',redirectTo:'/AdoptedComponent', pathMatch:'full'},
    {path:'ajouter', component: AnimalComponent},
    {path:'adoption', component: AdoptedComponent},
    {path:'perdu', component: PerduComponent },
    {path:'trouve', component:TrouveComponent},
    {path:'profil', component:PersonneComponent},
    {path:'contact',component:ContactComponent},
    {path: 'adoption/detail/:id',component: DetailsAnimalComponent},
    {path: 'trouve/detail/:id',component: DetailsAnimalComponent},
    {path: 'perdu/detail/:id',component: DetailsAnimalComponent},
    {path: 'clients',component: ClientsComponent},
    {path: 'messages', component: MessagesComponent},
    {path:'**',component: PageNotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
