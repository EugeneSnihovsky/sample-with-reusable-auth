'use strict';

import { Component } from '@angular/core';
import { NotifyService } from '@agiliumlabs/ng2-notify';
import { SignUpSharedComponent } from '_ng-reusable-auth';

@Component({
  selector: 'app-sign-up',
  template: `
    <h1>Sign up local template with shared logic</h1>
    <button (click)="callReusableNotify()">Call reusable notify</button>
    <br><br>
    <a [routerLink]="['/sign-in']">Sign in link</a>
    <br><br>
    <al-notify for="sign-up"></al-notify>
  `
})
export class SignUpComponent extends SignUpSharedComponent {

  public constructor(
    _notify: NotifyService
  ) {
    super(_notify);
  }

}
