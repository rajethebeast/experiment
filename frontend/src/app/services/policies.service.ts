import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerInfo } from 'src/model/CustomerInfo';
import { PolicyInfo } from 'src/model/PolicyInfo';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
 
  fetchPolicy():Observable<any> {
   
    return this.http.get<PolicyInfo[]>(environment.serverUrl+'/policy/house' );
  }

  fetchPolicyAuto():Observable<any> {
   
    return this.http.get<PolicyInfo[]>(environment.serverUrl+'/policy/auto' );
  }

  fetchPolicyHealth():Observable<any> {
   
    return this.http.get<PolicyInfo[]>(environment.serverUrl+'/policy/health' );
  }

  fetchPolicyLife():Observable<any> {
   
    return this.http.get<PolicyInfo[]>(environment.serverUrl+'/policy/life' );
  }

  buyPolicy(token: string, pid: number) {
    let header={'Authorization':'Basic '+token};
    let url = environment.serverUrl+"/customer/buy/"+pid;
    return this.http.get<CustomerInfo>(url,{headers: header});
  }
  constructor(private http: HttpClient) { }
}
