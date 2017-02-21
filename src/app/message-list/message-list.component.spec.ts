import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListComponent ]
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

  it(`should have property message set with an array of messages'`, async(() => {
    const fixture = TestBed.createComponent(MessageListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.messages).toEqual([
      'message 1',
      'message 2',
      'message 3'
    ]);
  }));

  it('should render message list', async(() => {
    const fixture = TestBed.createComponent(MessageListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('li')[0].textContent).toContain('message 1');
    expect(compiled.querySelectorAll('li')[1].textContent).toContain('message 2');
    expect(compiled.querySelectorAll('li')[2].textContent).toContain('message 3');
  }));

});
