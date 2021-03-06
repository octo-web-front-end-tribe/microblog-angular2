import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MessageService } from './services/message.service';
import { LoginComponent } from './components/login/login.component';
import {AuthenticationService} from "./services/authentication.service";
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProtectedDirective } from './directives/protected.directive';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageInputComponent,
    MessageContainerComponent,
    AboutComponent,
    NotFoundComponent,
    NavigationBarComponent,
    LoginComponent,
    LoginFormComponent,
    ProtectedDirective,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'app-root',
      storageType: 'localStorage'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [MessageService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
