import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
  NbMenuItem
} from '@nebular/theme';

// import { UserData } from '../../../@core/data/users';
// import { LayoutService } from '../../../@core/utils';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;
  user: any = null;
  isAuthenticated = false;

  currentTheme = 'default';
  userMenu = [
    { title: 'Profile', data: { id: 'profile' } },
    { title: 'Log out', data: { id: 'logout' } }
  ];

  constructor(
    // private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    public userService: NbAuthService,
    // private layoutService: LayoutService,
    private router: Router,
    private nbMenuService: NbMenuService,
    private breakpointService: NbMediaBreakpointsService
  ) {}

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.nbMenuService
      .onItemClick()
      .pipe(filter(({ tag }) => tag === 'headerUserMemu'))
      .subscribe((event: any) => {
        if (event.item.data.id === 'logout') {
          this.router.navigate(['/', 'auth', 'logout']);
        }
        if (event.item.data.id === 'profile') {
          this.router.navigate(['/', 'profile']);
        }
      });

    this.user = {
      picture: 'https://ui-avatars.com/api/?size=128&name=Hernan&rounded=true'
    };

    this.userService
      .isAuthenticated()
      .subscribe(
        (isAuthenticated: any) => (this.isAuthenticated = isAuthenticated)
      );
    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe(themeName => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    // this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
