import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages = [
    'message 1',
    'message 2',
    'message 3'
  ];

  ngOnInit() {
  }

}
