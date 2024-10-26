import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMenuComponent } from './components/welcome-menu/welcome-menu.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [AppComponent, WelcomeMenuComponent, RegistrationComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
