import { Injectable } from '@angular/core';
import {Message} from "../models/message";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {

  messagesUrl = 'http://microblog-api.herokuapp.com/api/messages';

  messages:Message[] = [];

  constructor (private http: Http) {}

  getMessages(): Promise<Message[]> {
    return this.http.get(this.messagesUrl)
                    .toPromise()
                    .then(response => {
                      this.messages = response.json();
                      return this.messages;
                    });
  }

  createMessage(message): Promise<any> {
    return this.http.post(this.messagesUrl, message)
                    .toPromise()
                    .then(response => {
                      this.messages.push(response.json());
                    });
  }

}
