import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunPageComponent } from './pages/sun.page.component';
import { MarsPageComponent } from './pages/mars.page.component';
import { JupiterPageComponent } from './pages/jupiter.page.component';
import { SaturnPageComponent } from './pages/saturn.page.component';
import { MoonPageComponent } from './pages/moon.page.component';
import { UranusPageComponent } from './pages/uranus.page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SunPageComponent,
    MarsPageComponent,
    JupiterPageComponent,
    SaturnPageComponent,
    MoonPageComponent,
    UranusPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
