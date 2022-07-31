import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlComponent } from './access-control.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PermissionsComponent } from './permissions/permissions.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AccessControlComponent, PermissionsComponent],
})
export class AccessControlModule {}
