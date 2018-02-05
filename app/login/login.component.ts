import { Component, OnInit } from '@angular/core';
import {Employee} from '../Class/employee';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imagepath:string="https://www.walldevil.com/wallpapers/a36/background-start-customization-logon-back-ground-screen-about-general-quick-question-windows.jpg";
  constructor() { }

  ngOnInit() {
  }

}
