import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PolicyInfo } from 'src/model/PolicyInfo';
import { VendorInfo } from 'src/model/VendorInfo';

@Injectable({
  providedIn: 'root'
})
export class VendorDashboardService {
 
 





  policyInfo$ = new BehaviorSubject<PolicyInfo>({});
 
  constructor(private http: HttpClient) { }
  getVendorInfo(token: string): Observable<VendorInfo> {
    let header={'Authorization':'Basic '+token};
    return this.http.get<VendorInfo>('http://localhost:8965'+ '/vendor/one' , {headers: header});
  }

  getPolicy(token: string): Observable<PolicyInfo[]> {
    let header={'Authorization':'Basic '+token};
     return this.http.get<PolicyInfo[]>('http://localhost:8965' + '/policy/all', {headers: header});
  }

  postPolicy(policy: { name: any; category: any; startDate: any; duration: any; 
    initialDeposit: any; userType: any; termPerYear: any; termAmount: any; 
    rateOfInterest: any; maturityAmount: any; status: any; }, token: string): Observable<any> {
      let header={'Authorization':'Basic '+token};
      return this.http.post( 'http://localhost:8965' + '/policy/add', policy, {headers: header});
    }

    getUser(token: string): Observable<VendorInfo> {
      let header={'Authorization':'Basic '+token};
       return this.http.get<VendorInfo>('http://localhost:8965'+ '/vendor/one' , {headers: header});
    }
}
