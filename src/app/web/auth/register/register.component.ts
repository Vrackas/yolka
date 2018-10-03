import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthSecondService } from "../shared/services/auth-second.service";

declare interface RegisterData {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    role: string;
}


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public userData: RegisterData;

    constructor(
        public route: ActivatedRoute,
        public service: AuthSecondService,
        public router: Router
    ) {
        this.userData = { name: '', surname: '', email: '', phone: '', password: '', role: '' };
    }

    ngOnInit() {
        let type = this.route.params['_value']['type'];
        if (type == 2) {
            this.userData['role'] = 'cleaner';
        } else {
            this.userData['role'] = 'customer';
        }
    }

    register() {
        this.service.register(this.userData).subscribe();
        this.router.navigate(['web/login']);
    }
}