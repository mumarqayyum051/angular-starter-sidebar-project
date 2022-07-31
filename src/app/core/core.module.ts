import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarComponent, LayoutComponent],
})
export class CoreModule {}
