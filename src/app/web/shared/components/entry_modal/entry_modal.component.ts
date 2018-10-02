import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginModalComponent } from "../login_modal/login_modal.component";
import { BsModalService } from "ngx-bootstrap";
import { RegistrationModalComponent } from "../registration_modal/registration_modal.component";
import { AuthService } from '../../../../auth/shared/services/auth.service';
import { LocalStorageService } from 'ngx-store';
import { Router } from '@angular/router';

declare interface SignInData {
    email: string;
    password: string;
}

@Component({
    selector: 'app-entry-modal',
    templateUrl: './entry_modal.component.html',
    styleUrls: ['./entry_modal.component.scss']
})
export class EntryModalComponent implements OnInit {

    userData: SignInData;

    constructor(public modalRef: BsModalRef,
        private modalService: BsModalService,
        public auth: AuthService,
        public localStorageservice: LocalStorageService,
        public router: Router
    ) {
        this.userData = { email: 'lolor2000@gmail.com', password: '111111' };
    }

    ngOnInit() {
    }

    openLogin(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(LoginModalComponent, {
            initialState: {
                data: {}
            }

        });

    }

    login() {
        this.modalRef = this.modalService.show(LoginModalComponent, {
            initialState: {
                data: {}
            }

        });
        // this.auth.signIn(this.userData).subscribe(res => {
        //     this.localStorageservice.set('token', res['data']['token']);
        //     this.localStorageservice.set('user', res['data']['user']);
        //     this.router.navigate(['web/admin/personal-room']);
        // });
    }

    openRegistration(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(RegistrationModalComponent, {
            initialState: {
                data: {}
            }

        });

    }
}