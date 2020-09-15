import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JupiterPageComponent } from './pages/jupiter.page.component';
import { MarsPageComponent } from './pages/mars.page.component';
import { MoonPageComponent } from './pages/moon.page.component';
import { SaturnPageComponent } from './pages/saturn.page.component';
import { SunPageComponent } from './pages/sun.page.component';
import { UranusPageComponent } from './pages/uranus.page.component';

const routes: Routes = [
  { path: 'jupiter', component: JupiterPageComponent, data: {animation: 'jupiter'}},
  { path: 'mars', component: MarsPageComponent, data: {animation: 'mars'}},
  { path: 'moon', component: MoonPageComponent, data: {animation: 'moon'}},
  { path: 'saturn', component: SaturnPageComponent, data: {animation: 'saturn'}},
  { path: 'sun', component: SunPageComponent, data: {animation: 'sun'}},
  { path: 'uranus', component: UranusPageComponent, data: {animation: 'uranus'}},
];


@NgModule({
  //RouterModule.forRoot(appRoutes , { initialNavigation: false }) disable initial navigation
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
