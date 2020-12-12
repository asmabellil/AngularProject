import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactService {
  url = 'http://localhost:3000/contacts/';

  constructor(private http: HttpClient) { }

  getMessages(){
    return this.http.get<Contact[]>(this.url);
  }

  addMessage(c: Contact){ 
    return this.http.post(this.url, c); 
  }  

  deleteMessage(id: number){
    return this.http.delete(this.url + id);
  }
}
