import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TruckProfileComponent } from './truck-profile/truck-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'truck-profile', component: TruckProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
