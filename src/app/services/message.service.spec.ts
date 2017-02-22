import { TestBed, inject, async } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should inject message service', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should have messages property set with default value', inject([MessageService], (service: MessageService) => {
    expect(service.messages).toEqual([
      {id: 1, author: 'flm', content: 'message 1'},
      {id: 2, author: 'flm', content: 'message 2'},
      {id: 3, author: 'flm', content: 'message 3'}
    ]);
  }));

  it('should return messages property content called getMessages()', inject([MessageService], (service: MessageService) => {
    service.messages = [{id: 42, author: 'jbu', content: 'fake content'}];
    service.getMessages().then((messages) => {
      expect(messages).toEqual([{id: 42, author: 'jbu', content: 'fake content'}])
    });
  }));

  it('should add new message into messages array', inject([MessageService], (service: MessageService) => {
    service.messages = [];
    service.createMessage({id: 42, author: 'jbu', content: 'fake content'}).then(() => {
      expect(service.messages).toEqual([{id: 42, author: 'jbu', content: 'fake content'}])
    });
  }));

});
