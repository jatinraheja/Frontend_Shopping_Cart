import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {LogoutComponent} from "./logout/logout.component";
// import {AuthGuardService} from "./auth-guard.service";

export const MAIN_ROUTES: Routes = [
  {
    path : 'signup',
    component :  SignupComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
{path : 'home' , component : HomePageComponent},
  {path : 'details', component : ProductDetailsComponent},
  {path : 'cart/:id' , component : UserCartComponent},
  {path : 'details/:id' , component : ProductDetailsComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent}
  ];
