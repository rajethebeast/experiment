import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorInfo } from 'src/model/VendorInfo';

@Injectable({
  providedIn: 'root'
})
export class VendorSignupService {

  constructor(private http: HttpClient) { }
  public signUp(vendorInfo: VendorInfo) : Observable<any>{
    let obj={
      name:vendorInfo.name,
      address:vendorInfo.address,
      contact:vendorInfo.contact,
      email:vendorInfo.email,
      user:{
        username: vendorInfo.email,
        password: vendorInfo.password
        }
     
      
  }
    return this.http.post('http://localhost:8965/vendor/add', obj);
}
}