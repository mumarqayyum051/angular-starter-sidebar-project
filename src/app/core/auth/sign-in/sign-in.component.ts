import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.userService.login(this.form.value).subscribe(
      (res) => {
        console.log('res', res);
        if (res.status == 200) {
          this.router.navigate(['/feed']);
        }
      },
      ({ message }) => {
        this._snackBar.open(message, '', {
          duration: 2000,
        });
      }
    );
  }
}
