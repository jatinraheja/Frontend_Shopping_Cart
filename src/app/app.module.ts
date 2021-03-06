import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ProductsdataService} from './productsdata.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { LogoutComponent } from './logout/logout.component';
import {AuthenticateService} from "./authenticate.service";
import {AppService} from "./app.service";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {UserService} from "./user.service";
import { AddItemComponent } from './add-item/add-item.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

// import {AuthGuardService} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailsComponent,
    HomePageComponent,
    UserCartComponent,
    ProductListComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    OrderHistoryComponent,
    MyProfileComponent,
    AddItemComponent,
    EditprofileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsdataService,
    AuthenticateService,
    AppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
