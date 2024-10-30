import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proj1';

  formLogin: FormGroup;

  testValidator = (control: FormControl) => {
    console.log(control);
    const val: string = control.value;
    if (val.length < 6) {
      // return false; //{ password: 'СЛИШКОМ КОРОТКИЙ ПАРОЛЬ' };
    }
    return null;
  };

  constructor() {
    this.formLogin = new FormGroup({
      login: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [
        Validators.required,
        this.testValidator,
      ]),
    });
  }

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe((val) => {
      console.log(val, this.formLogin.valid);
    });
  }
}
