import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IRegUser } from 'src/app/models/auth.model';

@Component({
  selector: 'app-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.scss'],
})
export class WelcomeMenuComponent {
  userData: IRegUser = { login: '', password: '' };

  @Output() showRegistrationEvent = new EventEmitter();
  verification() {
    /*Тут будет происходить проверка введенных данных*/
  }

  showRegistration() {
    this.showRegistrationEvent.emit();
  }
}
