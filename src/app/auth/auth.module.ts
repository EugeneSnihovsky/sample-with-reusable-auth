'use strict';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReusableModule } from '_ng-reusable-auth'

import { LocalServiceModule } from '../shared/service/local/local.module';
import { AuthRoutes } from './auth.routes';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    LocalServiceModule,
    ReusableModule,
    RouterModule.forRoot([
      ...AuthRoutes
    ])
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
