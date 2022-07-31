import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Routes } from './auth-routing.module';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(Routes)],
  declarations: [AuthComponent, LoginComponent],
})
export class AuthModule {}
