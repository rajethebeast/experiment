import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { AddPolicyComponent } from './customerMods/add-policy/add-policy.component';
import { CDashboardComponent } from './customerMods/c-dashboard/c-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';
import { VDashboardComponent } from './vendorMods/v-dashboard/v-dashboard.component';
import { VinfoComponent } from './vendorMods/vinfo/vinfo.component';

import { VpolicyListComponent } from './vendorMods/vpolicy-list/vpolicy-list.component';
import { VpolicyAddComponent } from './vendorMods/vpolicy-add/vpolicy-add.component';
import { VprofileComponent } from './vendorMods/vprofile/vprofile.component';
import { LandingComponent } from './home/landing/landing.component';





@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerSignupComponent,
    AddPolicyComponent,
    CDashboardComponent,
    LoginComponent,
    NavbarComponent,
    VendorComponent,
    VendorSignupComponent,
    VDashboardComponent,
    VinfoComponent,

    VpolicyListComponent,
     VpolicyAddComponent,
     VprofileComponent,
     LandingComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
