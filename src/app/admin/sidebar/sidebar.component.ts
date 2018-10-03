import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { ROLES } from '../../shared/constants/roles';
import { Router } from '@angular/router';

declare const $: any;

// declare interface RouteInfo {
//     path: string;
//     title: string;
//     class: string;
//     access: Array<any>;
// }

// export const ROUTES: RouteInfo[] = [
//     { path: 'personal-room', title: 'Личный кабинет', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
//     { path: 'my-cleaners', title: 'Мои уборки', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
//     { path: 'my-clianing', title: 'Мои специалисты', class: '', access: [ROLES.Customer] },
//     { path: 'my-clients', title: 'Мои клиенты', class: '', access: [ROLES.Cleaner] },
//     { path: 'payment', title: 'Реквизиты', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
//     { path: 'notifications', title: 'Настройки', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
//     { path: 'notifications', title: 'Вопросы', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
//     { path: 'notifications', title: 'Больше интересного', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
//     { path: 'notifications', title: 'Выход', class: '', access: [ROLES.Cleaner, ROLES.Customer] },
// ];

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
        this.user = localstorageService.get('user');
        console.log(this.user);
    }

    ngOnInit() {
        // this.menuItems = ROUTES;
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

    logout() {
        this.localStorageService.clear();
        this.router.navigate(['web/home']);
        location.reload();
    }
}
