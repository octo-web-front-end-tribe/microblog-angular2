import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageContainerComponent} from './components/message-container/message-container.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  { path: '',  component: MessageContainerComponent, canActivate: [AuthGuardService] },
  { path: 'about',  component: AboutComponent },
  { path: 'login',  component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
