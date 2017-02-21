import { Component, OnInit } from '@angular/core';
import {Message} from "../models/message";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages:Message[] = [
    {id: 1, author: 'flm', content: 'message 1'},
    {id: 2, author: 'flm', content: 'message 2'},
    {id: 3, author: 'flm', content: 'message 3'}
  ];

  ngOnInit() {
  }

}
