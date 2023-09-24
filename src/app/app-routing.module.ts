import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import  { DisplayPurchasesComponent } from './display-purchases/display-purchases.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'display-purchase', component: DisplayPurchasesComponent },
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule { }
