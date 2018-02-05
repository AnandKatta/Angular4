import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Employee} from './Class/employee';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
