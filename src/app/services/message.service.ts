import { Injectable } from '@angular/core';
import {Message} from "../models/message";

@Injectable()
export class MessageService {

  getMessages(): Promise<Message[]> {
    return Promise.resolve([
      {id: 1, author: 'flm', content: 'message 1'},
      {id: 2, author: 'flm', content: 'message 2'},
      {id: 3, author: 'flm', content: 'message 3'}
    ]);
  }

}
