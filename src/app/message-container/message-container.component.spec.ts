import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContainerComponent } from './message-container.component';
import {MessageInputComponent} from "../message-input/message-input.component";
import {MessageListComponent} from "../message-list/message-list.component";
import {MessageItemComponent} from "../message-item/message-item.component";

describe('MessageContainerComponent', () => {
  let component: MessageContainerComponent;
  let fixture: ComponentFixture<MessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageContainerComponent,
        MessageInputComponent,
        MessageListComponent,
        MessageItemComponent
      ]
    })
    .compileComponents();
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
