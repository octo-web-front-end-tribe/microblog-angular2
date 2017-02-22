import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import {MessageItemComponent} from "../message-item/message-item.component";
import {MessageInputComponent} from "../message-input/message-input.component";
import {MessageService} from "../services/message.service";

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageListComponent,
        MessageItemComponent,
        MessageInputComponent
      ],
      providers: [MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get messages on ngInit', async(() => {
    const fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getMessages');
    component.ngOnInit();
    expect(component.getMessages).toHaveBeenCalled();
  }));

  it(`should set 'messages' property when promise resolves`, async(() => {
    
  }));

  /*it(`should have property message set with an array of messages'`, async(() => {
    const fixture = TestBed.createComponent(MessageListComponent);
    const app = fixture.debugElement.componentInstance;
    component = fixture.componentInstance;
    component.ngOnInit();
    expect(app.messages).toEqual([
      {id: 1, author: 'flm', content: 'message 1'},
      {id: 2, author: 'flm', content: 'message 2'},
      {id: 3, author: 'flm', content: 'message 3'},
    ]);
  }));

  it('should render message list', async(() => {
    const fixture = TestBed.createComponent(MessageListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('li')[0].textContent).toContain('message 1');
    expect(compiled.querySelectorAll('li')[1].textContent).toContain('message 2');
    expect(compiled.querySelectorAll('li')[2].textContent).toContain('message 3');
  }));*/

});
