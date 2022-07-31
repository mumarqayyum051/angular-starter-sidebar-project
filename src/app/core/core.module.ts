import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ApiService } from './services/api.service';
import { AuthGuard } from './services/auth-guard.service';
import { JwtService } from './services/jwt.service';
import { NoAuthGuard } from './services/no-auth-gaurd.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SidebarComponent, LayoutComponent],
  exports: [LayoutComponent],
  providers: [UserService, ApiService, JwtService, AuthGuard, NoAuthGuard],
})
export class CoreModule {}
