import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemComponent } from './message-item.component';
import {Message} from "../models/message";

describe('MessageItemComponent', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemComponent);
    component = fixture.componentInstance;
    component.message = new Message(42, 'flm', 'message content');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
