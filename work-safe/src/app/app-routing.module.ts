import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { ContactPageComponent} from  './contact-page/contact-page.component';

const routes: Routes = [
  
  { path: '', component : LandingPageComponent},
  { path: 'login', component : LoginPageComponent},
  { path: 'contact', component : ContactPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
