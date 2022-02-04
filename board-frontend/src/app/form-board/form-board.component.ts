import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageData } from '../model/message.model';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-form-board',
  templateUrl: './form-board.component.html',
  styleUrls: ['./form-board.component.sass']
})
export class FormBoardComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  fetching = false;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.fetching = true
    const messageData: MessageData = this.form.value;
    this.messageService.createNewMessage(messageData).subscribe(() => {
      this.messageService.getMessages();
      this.fetching = false;
    });
  }
}
