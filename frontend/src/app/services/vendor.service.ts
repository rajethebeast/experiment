import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from 'src/model/Vendor';
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }
  getAllVendors(): Observable<Vendor[]>{
    return this.http.get<Vendor[]>('http://localhost:3969/vendor/all');
  }
}