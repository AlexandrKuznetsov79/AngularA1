import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task1';
  isShowLogIn = true;

  changeView() {
    console.log('!!!!!!!');
    this.isShowLogIn = !this.isShowLogIn;
  }
}
