import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliciesService } from 'src/app/services/policies.service';
import { CustomerInfo } from 'src/model/CustomerInfo';
import { PolicyInfo } from 'src/model/PolicyInfo';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  policy:PolicyInfo[];
  customer:CustomerInfo;
token :string;

  constructor(private router: Router,private pservice: PoliciesService ) { }


  ngOnInit(): void {
    this.pservice.fetchPolicyHealth()
    .subscribe({
      next: (data)=>{
        this.policy = data;
      }
    })

  }

  onClick(pid:number){
   
    if(localStorage.getItem('token')){
      
  this.pservice.buyPolicy(localStorage.getItem('token'),pid).subscribe({
    next:(data)=>{
      this.customer = data;
    },
    error:(error)=>{}
  });
  this.router.navigateByUrl("/customer/cpolicylist");
    }else{this.router.navigateByUrl("/login");}
    
    }
  }
  
