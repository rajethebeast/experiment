import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/model/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(userInfo: UserInfo, token: string) : Observable<UserInfo>{

    let header={'Authorization':'Basic '+token};
    /*
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Basic '+token
      })
    };
    */
     return this.http.get<UserInfo>('http://localhost:8965/user/login', {headers : header});
  }
}
