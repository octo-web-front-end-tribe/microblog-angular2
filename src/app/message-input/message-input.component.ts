import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  addMessage(content) {
    this.messageService.createMessage({
      id: 42,
      author: 'toto',
      content: content.value
    });

    content.value = null;
  }
}
