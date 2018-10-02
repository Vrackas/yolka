import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../../auth/shared/services/auth.service";
import { LocalStorageService } from "ngx-store";
import { ROLES } from "../constants/roles";

@Injectable()
export class RoleGuardService implements CanActivate {

    user = {
        role: ''
    };
    token: any;

    constructor(public router: Router, public localStorageService: LocalStorageService) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        this.user['role'] = this.localStorageService.get('user')['role'];

        if (this.user['role'] == ROLES.Cleaner) {
            this.router.navigate(['web/admin/personal-room-cleaner']);
            return false;
        } else {
            this.router.navigate(['web/admin/personal-room-client']);
            return false;
        }
    }
}