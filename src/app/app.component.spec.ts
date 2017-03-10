import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {AuthenticationService} from "./services/authentication.service";
import {LocalStorageService} from "angular-2-local-storage/dist/index";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationBarComponent
      ],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: AuthenticationService, useValue: {}},
        {provide: LocalStorageService, useValue: {}}
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
