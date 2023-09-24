import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule { }
