import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
=======
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> 61364d10d6d432f1adaadb625aef26f596ddcc0d

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
<<<<<<< HEAD
    AppRoutingModule,
    BrowserModule    
=======
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
>>>>>>> 61364d10d6d432f1adaadb625aef26f596ddcc0d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
