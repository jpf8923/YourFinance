import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayAccStatusComponent } from './display-acc-status/display-acc-status.component';
import { SignupComponent } from './signup/signup.component';
import { GraphComponent } from './graph/graph.component';
import { PurchasesComponent } from './purchases/purchases.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'display-acc-status', component: DisplayAccStatusComponent },
  { path: 'login', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'purchases', component: PurchasesComponent},
  { path: 'graph', component: GraphComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule { }
