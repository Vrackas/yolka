import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthSecondService } from "../shared/services/auth-second.service";
import { LocalStorageService } from "ngx-store";

declare interface SignInData {
    email: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public userData: SignInData;

    constructor(
        public service: AuthSecondService,
        public localStorageService: LocalStorageService,
        public router: Router
    ) {
        this.userData = { email: '', password: '' };
    }

    ngOnInit() {

    }

    done() {
        this.service.login(this.userData).subscribe(res => {
            this.localStorageService.set('token', res['data']['token']);
            this.localStorageService.set('user', res['data']['user']);
            this.router.navigate(['web/admin/personal-room']);
        });
    }

}