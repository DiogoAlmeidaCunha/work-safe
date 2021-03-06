import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './Components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';

import AOS from 'aos';
import { ContactPageComponent } from './contact-page/contact-page.component';
AOS.init();


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    FooterComponent,
    LoginPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
