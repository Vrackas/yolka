import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { ROLES } from '../../shared/constants/roles';
import { Router } from '@angular/router';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
    access: Array<number>;
}

export const ROUTES: RouteInfo[] = [
    { path: 'personal-room', title: 'Личный кабинет',  class: '', access: [ROLES.Admin] },
    { path: 'my-cleaners', title: 'Мои уборки',  class: '', access: [ROLES.Admin] },
    { path: 'my-clients', title: 'Мои клинеры',  class: '', access: [ROLES.Admin] },
    { path: 'payment', title: 'Реквизиты',  class: '', access: [ROLES.Admin, ROLES.Admin] },
    { path: 'notifications', title: 'Настройки',  class: '', access: [ROLES.Admin] },
    { path: 'notifications', title: 'Вопросы',  class: '', access: [ROLES.Admin] },
    { path: 'notifications', title: 'Больше интересного',  class: '', access: [ROLES.Admin] },
    { path: 'notifications', title: 'Выход',  class: '', access: [ROLES.Admin] },
  ];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    public user: any;

    constructor(
        localstorageService: LocalStorageService,
        public router: Router,
        public localStorageService: LocalStorageService) {
        // this.user = localstorageService.get('user');
        console.log(this.user);
    }

    ngOnInit() {
        this.menuItems = ROUTES;
        // this.menuItems = ROUTES.filter(menuItem => {
        //     return menuItem.access.indexOf(this.user.role_id) !== -1;
        // });
    }

    // isMobileMenu() {
    //     if ($(window).width() > 991) {
    //         return false;
    //     }
    //     return true;
    // }

    // logout() {
    //     this.localStorageService.clear();
    //     this.router.navigate(['auth/sign-in']);
    // }
}
