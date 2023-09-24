

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { DisplayPurchasesComponent } from './purchases/purchases.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> 190235d5f5cb7ca14c7b0a746dd3ee3e317ffab4

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DisplayPurchasesComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule
=======
    AppRoutingModule
    
>>>>>>> 190235d5f5cb7ca14c7b0a746dd3ee3e317ffab4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
