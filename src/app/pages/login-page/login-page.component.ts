import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { from, map, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);

  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });

  constructor() {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        map((val) => val * 2),
        tap((val) => this.form.patchValue({ username: val.toString() }))
      )
      .subscribe((val) => {
        console.log(val);
      });
  }

  onSubmit() {
    if (this.form.valid) {
      // console.log(this.form.value);
      //@ts-ignore
      this.authService.login(this.form.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
