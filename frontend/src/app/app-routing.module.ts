import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { LoginComponent } from './components/login/login.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';
import { CDashboardComponent } from './customerMods/c-dashboard/c-dashboard.component';
import { LandingComponent } from './home/landing/landing.component';
import { AuthGuardService } from './services/auth-guard.service';
import { VDashboardComponent } from './vendorMods/v-dashboard/v-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'customer-sign-up', component: CustomerSignupComponent},
  {path: 'vendor-sign-up', component: VendorSignupComponent},
  {path: 'customer-dashboard', component: CDashboardComponent, canActivate:[AuthGuardService]},
  {path: 'vendor-dashboard', component: VDashboardComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

