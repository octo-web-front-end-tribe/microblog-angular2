import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContainerComponent } from './message-container.component';
import {MessageInputComponent} from '../message-input/message-input.component';
import {MessageListComponent} from '../message-list/message-list.component';
import {MessageItemComponent} from '../message-item/message-item.component';
import {MessageService} from '../../services/message.service';
import {AuthenticationService} from "../../services/authentication.service";

describe('MessageContainerComponent', () => {
  let component: MessageContainerComponent;
  let fixture: ComponentFixture<MessageContainerComponent>;
  let messageServiceStub;

  beforeEach(async(() => {
    messageServiceStub = {
      getMessages() { return Promise.resolve() }
    };
    
    TestBed.configureTestingModule({
      declarations: [
        MessageContainerComponent,
        MessageInputComponent,
        MessageListComponent,
        MessageItemComponent
      ],
      providers: [
        {provide: MessageService, useValue: messageServiceStub},
        {provide: AuthenticationService, useValue: {}}
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
