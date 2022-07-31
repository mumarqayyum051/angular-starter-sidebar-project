import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Routes } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(Routes)],
  declarations: [AuthComponent, LoginComponent, SignInComponent],
})
export class AuthModule {}
