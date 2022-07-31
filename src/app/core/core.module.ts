import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SidebarComponent, LayoutComponent],
  exports: [LayoutComponent],
})
export class CoreModule {}
