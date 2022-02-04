import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../model/message.model';
import { Subscription } from 'rxjs';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit, OnDestroy {
  messages!: Message[];
  messagesSubscription!: Subscription;

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesSubscription = this.messagesService.messagesChange.subscribe((messages: Message[]) => {
      this.messages = messages;
    });

    this.messagesService.getMessages();
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

}
