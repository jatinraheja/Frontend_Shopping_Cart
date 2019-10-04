import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

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
  {path : 'cart' , component : UserCartComponent},
  {path : 'details/:id' , component : ProductDetailsComponent},
  {path : 'login' , component : LoginComponent}

  ];
