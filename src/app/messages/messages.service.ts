import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

 private messages: string[] = []

constructor() { }

add(message: string){
  this.messages.push(message);
}

clear(){
  this.messages = []

}

getMessages(){
  return this.messages;
}

}
