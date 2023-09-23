

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayAccStatusComponent } from './display-acc-status/display-acc-status.component';
import { DisplayGraphComponent } from './display-graph/display-graph.component';
import { DisplayPurchasesComponent } from './display-purchases/display-purchases.component';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAccStatusComponent,
    DisplayGraphComponent,
    DisplayPurchasesComponent,
    LogInComponent,
    HomeScreenComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
