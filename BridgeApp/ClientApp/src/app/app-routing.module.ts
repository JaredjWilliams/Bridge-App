import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointscreenComponent } from './pointscreen/pointscreen.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BidscreenComponent } from './bidscreen/bidscreen.component';

const routes: Routes = [
  { path: 'points', component: PointscreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bidscreen', component: BidscreenComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
