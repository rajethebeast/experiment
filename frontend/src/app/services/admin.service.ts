import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminInfo } from 'src/model/AdminInfo';
import { Policy } from 'src/model/policy.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  policy$ = new BehaviorSubject<Policy>({});
  constructor(private http: HttpClient) { }

  getAdminInfo(token: string) {
    let header={'Authorization':'Basic '+token};
    return this.http.get<AdminInfo>(environment.serverUrl+ '/admin/one' , {headers: header});
  }

  getAllPendingPolicies(token: string, status: string) : Observable<Policy[]>{
    let header={'Authorization':'Basic '+token};
    return this.http.get<Policy[]>(environment.serverUrl+ '/policy/pending/' + status, {headers: header});
  }
 
  updateStatus(token: string, id: number, status: string) :Observable<any>{
    let header={'Authorization':'Basic '+token};
    return this.http.put(environment.serverUrl+ '/policy/update/status/'+id+'/'+status,{}, {headers: header} )
  }

  getPolicyListByStatus(token: string, status: string) {

    let header = { 'Authorization': 'Basic ' + token };

    return this.http.get<Policy[]>(environment.serverUrl+ '/policy/' + status, {headers: header});

  }
  getAllPolicies(token: string) : Observable<Policy[]>{

    let header = { 'Authorization': 'Basic ' + token };

    return this.http.get<Policy[]>(environment.serverUrl + '/policy/all', { headers: header });

  }

}
