import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PolicyInfo } from 'src/model/PolicyInfo';
import { Policy } from 'src/model/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VpolicyListService {
  policy$ = new BehaviorSubject<PolicyInfo>({});

  getPolicy(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
