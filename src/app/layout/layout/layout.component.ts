import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService, NbMediaBreakpointsService, 
  NbMenuItem } from '@nebular/theme';
import { LayoutService } from '../layout.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Location } from "@angular/common";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  userPictureOnly: boolean = false;
  user: any="Amit";
  location: Location;
  constructor(private sidebarService:NbSidebarService,
    private layoutService:LayoutService,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService) { }



    items: NbMenuItem[] = [
      {
        link: '/pages/dashboard',
        title: 'Overview',
        icon: 'person-outline',
        home: true,
      },
      {
        title: 'Equipment',
        icon: 'lock-outline',
        link: '/pages/equipment',
      },
      {
        title: 'Energy',
        icon: { icon: 'checkmark-outline', pack: 'eva' },
        link: '/pages/energy',
      },
      {
        title: 'Alarms',
        icon: { icon: 'checkmark-outline', pack: 'eva' },
        link: '/pages/alarms',
      },
      {
        title: 'Reports',
        icon: { icon: 'checkmark-outline', pack: 'eva' },
        link: '/pages/reports',
      },
      {
        title: 'Trends',
        icon: { icon: 'checkmark-outline', pack: 'eva' },
        link: '/pages/trends',
      }
    
    ];

  ngOnInit(): void {
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "pages") {
      titlee = titlee.slice(1);
    }
  }

}
