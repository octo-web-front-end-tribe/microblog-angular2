import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  constructor(private messageService: MessageService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  addMessage(content) {
    this.messageService.createMessage({
      author: this.authenticationService.getUser(),
      content: content.value
    });

    content.value = null;
  }
}
