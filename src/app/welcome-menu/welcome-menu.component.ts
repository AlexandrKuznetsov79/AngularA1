import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.scss']
})
export class WelcomeMenuComponent  {

   login?:string;
   password?:string;
  
  verification(){
    /*Тут будет происходить проверка введенных данных*/
  }
}
