'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  public getSomething(): string {
    return 'Data from local service';
  }

}
