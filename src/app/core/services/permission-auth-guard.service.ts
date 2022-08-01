import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Injectable()
export class PermissionAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.jwtService.getToken()) {
      const userType = this.userService.getCurrentUser()?.userType;
      if (userType !== 'SuperAdmin') {
        this.router.navigate(['/feed']);
        return false;
      }
      return true;
    }
    return false;
  }
}
