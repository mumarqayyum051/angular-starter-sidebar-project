import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlComponent } from './access-control.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PermissionsComponent } from './permissions/permissions.component';
import { RouterModule } from '@angular/router';
import { Routes } from './access-control-routing.module';
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(Routes)],
  declarations: [AccessControlComponent, PermissionsComponent],
})
export class AccessControlModule {}
