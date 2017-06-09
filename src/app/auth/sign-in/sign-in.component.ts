'use strict';

import { Component } from '@angular/core';
import { NotifyService } from '@agiliumlabs/ng2-notify';
import { SignInSharedComponent, ReusableService } from '_ng-reusable-auth';

import { LocalService } from '../../shared/service/local/local.service';

@Component({
  selector: 'app-sign-in',
  template: `
    <h1>Sign in local template with shared logic</h1>
    <button (click)="callReusableNotify()">Call reusable notify</button>
    <br><br>
    <button (click)="callReusableService()">Call reusable service</button>
    <br><br>
    <button (click)="callExtendedLocalLogic()">Call extended local logic</button>
    <br><br>
    <button (click)="callExtendedLocalService()">Call extended local logic with local service</button>
    <br><br>
    <button (click)="callExtendedLocalLogicWithReusableService()">Call extended local logic with reusable service</button>
    <br><br>
    <a [routerLink]="['/sign-up']">Sign up link</a>
    <br><br>
    <al-notify for="sign-in"></al-notify>
  `
})
export class SignInComponent extends SignInSharedComponent {

  public constructor(
    notify: NotifyService,
    reusable: ReusableService,
    private _local: LocalService
  ) {
    super(notify, reusable);
  }

  public callExtendedLocalLogic() {
    alert('Extended local logic work');
  }

  public callExtendedLocalService() {
    const data: string = this._local.getSomething(),
      message = `Extended local logic with local service work: ${data}`;

    alert(message);
  }

  public callExtendedLocalLogicWithReusableService() {
    this._notify.notifyWarning('sign-in', 'Extended local logic with reusable service work');
  }

}
