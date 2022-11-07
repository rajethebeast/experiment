import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Policy } from 'src/model/policy.model';

@Component({
  selector: 'app-vpolicy-list',
  templateUrl: './vpolicy-list.component.html',
  styleUrls: ['./vpolicy-list.component.css']
})
export class VpolicyListComponent implements OnInit {

  policy: Policy[];
  msg: string;
  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.getPolicy();
    this.vendorService.policy$.subscribe({
      next: (data)=>{
        this.getPolicy();
      }
    });
  }

  getPolicy() {
    this.vendorService.getPolicy(localStorage.getItem('token')).subscribe({
      next: (data) => {
        this.policy = data;
      },
      error: (error) => {
          this.msg=error.error.msg;
      }
    });
  }
}
