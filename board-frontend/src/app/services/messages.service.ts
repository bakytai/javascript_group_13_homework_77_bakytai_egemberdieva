import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message, MessageData } from '../model/message.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  messagesFetching = new Subject<boolean>();
  messagesChange = new Subject<Message[]>();
  messages: Message[] = [];

  constructor(private http: HttpClient) {
  }
  getMessages() {
    this.messagesFetching.next(true);
    return this.http.get<Message[]>(environment.apiUrl + '/messages')
      .pipe(map(result => {
        if (result === null) {
          return [];
        }
        return result.map(messageData => {
          return new Message(messageData.id, messageData.message, messageData.author, messageData.image);
        });
      }))
      .subscribe(messages => {
        this.messages = messages;
        this.messagesChange.next(this.messages.slice());
        this.messagesFetching.next(false);
      });
  }

  createNewMessage(message: MessageData) {
    const formData = new FormData();

    Object.keys(message).forEach(key => {
      if (message[key] !== null) {
        formData.append(key,message[key]);
      }
    })

    return this.http.post(environment.apiUrl + '/messages', formData);
  };
}
