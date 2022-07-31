import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlComponent } from './access-control.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AccessControlComponent],
})
export class AccessControlModule {}
