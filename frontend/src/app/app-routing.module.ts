import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignupComponent } from './auth/admin-signup/admin-signup.component';
import { CustomerSignupComponent } from './auth/customer-signup/customer-signup.component';
import { LoginComponent } from './auth/login/login.component';
import { VendorSignupComponent } from './auth/vendor-signup/vendor-signup.component';

import { VendorDashboardComponent } from './components/vendor-modules/vendor-dashboard/vendor-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-modules/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './components/admin-modules/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HealthComponent } from './policies/health/health.component';
import { AutoComponent } from './policies/auto/auto.component';
import { HouseComponent } from './policies/house/house.component';
import { LifeComponent } from './policies/life/life.component';
import { VinfoComponent } from './components/vendor-modules/vinfo/vinfo.component';
import { VpolicyListComponent } from './components/vendor-modules/vpolicy-list/vpolicy-list.component';
import { VpolicyAddComponent } from './components/vendor-modules/vpolicy-add/vpolicy-add.component';
import { VprofileComponent } from './components/vendor-modules/vprofile/vprofile.component';
import { CinfoComponent } from './components/customer-modules/cinfo/cinfo.component';
import { PolicyListComponent } from './components/customer-modules/policy-list/policy-list.component';
import { CustomerUpdateComponent } from './components/customer-modules/customer-update/customer-update.component';
import { AdminInfo } from 'src/model/AdminInfo';
import { PolicyAccessComponent } from './components/admin-modules/policy-access/policy-access.component';
import { AllPolicyListComponent } from './components/admin-modules/all-policy-list/all-policy-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'customer-signup', component: CustomerSignupComponent },
  { path: 'vendor-signup', component: VendorSignupComponent },
  { path: 'admin-signup', component: AdminSignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'vendor', component: VendorDashboardComponent,
    children: [
      { path: '', component: VinfoComponent },
      { path: 'vpolicy', component: VpolicyListComponent },
      { path: 'vpolicyadd', component: VpolicyAddComponent },
      { path: 'vprofile', component: VprofileComponent },
    ]
  },
  {
    path: 'customer', component: CustomerDashboardComponent,
    children: [

      { path: '', component: CinfoComponent },
      { path: 'cpolicylist', component: PolicyListComponent },

      { path: 'cprofile', component: CustomerUpdateComponent },
    ]


  },
  { path: 'admin', component: AdminDashboardComponent ,
children:[
  { path: '', component: AdminInfo },
  { path: 'access', component: PolicyAccessComponent },
  { path: 'allpolicy', component: AllPolicyListComponent }
]
},
  { path: 'home', component: HomeComponent },
  { path: 'health', component: HealthComponent },
  { path: 'auto', component: AutoComponent },
  { path: 'house', component: HouseComponent },
  { path: 'life', component: LifeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
