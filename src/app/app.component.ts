import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proj1';

  formLogin: FormGroup;
  constructor() {
    this.formLogin = new FormGroup({
      login: new FormControl<string>(''),
      password: new FormControl<string>(''),
    });
  }

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
