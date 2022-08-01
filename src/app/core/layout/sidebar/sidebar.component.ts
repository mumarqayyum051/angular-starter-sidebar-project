import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isList!: number;
  isMenu: boolean = false;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
  currenUser: any;

  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;
  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(): void {
    this.currenUser = this.userService.getCurrentUser();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
