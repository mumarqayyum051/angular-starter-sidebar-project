import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
