import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AdoptedComponent } from './adopted/adopted.component';
import { PerduComponent } from './perdu/perdu.component';
import { TrouveComponent } from './trouve/trouve.component';
import { PersonneComponent } from './personne/personne.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AnimalFilsComponent } from './animal-fils/animal-fils.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { MessagesComponent } from './messages/messages.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientFilsComponent } from './client-fils/client-fils.component';
import { MessagesFilsComponent } from './messages-fils/messages-fils.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AdoptedComponent,
    PerduComponent,
    TrouveComponent,
    PersonneComponent,
    PageNotFoundComponent,
    ContactComponent,
    AnimalFilsComponent,
    DetailsAnimalComponent,
    MessagesComponent,
    ClientsComponent,
    ClientFilsComponent,
    MessagesFilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
