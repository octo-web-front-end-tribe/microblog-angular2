import { Component, OnInit } from '@angular/core';
import { Message } from "../models/message";
import { MessageService } from "../services/message.service";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages:Message[];

  constructor(private messageService: MessageService) {
  }

  getMessages(): Promise<Message[]> {
    return this.messageService.getMessages().then(messages => this.messages = messages);
  }

  ngOnInit() {
    this.getMessages();
  }

}
