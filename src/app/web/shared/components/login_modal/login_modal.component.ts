import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EntryModalComponent} from '../entry_modal/entry_modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {RegistrationModalComponent} from '../registration_modal/registration_modal.component';
import {ForgotPasswordModalComponent} from '../forgot_password_modal/forgot_password_modal.component';
import {AuthService} from '../../../../auth/shared/services/auth.service';
import {LocalStorageService} from 'ngx-store';
import {Router} from '@angular/router';

declare interface SignInData {
    email: string;
    password: string;
}


@Component({
    selector: 'app-login-modal',
    templateUrl: './login_modal.component.html',
    styleUrls: ['./login_modal.component.scss']
})
export class LoginModalComponent implements OnInit {


    userData: SignInData;

    constructor(public modalRef: BsModalRef,
                private modalService: BsModalService,
                public auth: AuthService,
                public localStorageservice: LocalStorageService,
                public router: Router) {
    }

    ngOnInit() {
    }

    back(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(EntryModalComponent, {
            initialState: {
                data: {}
            }

        });
    }

    openRegistration(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(RegistrationModalComponent, {
            initialState: {
                data: {}
            }
        });
    }

    openForgotPassword(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(ForgotPasswordModalComponent, {
            initialState: {
                data: {}
            }
        });
    }

    login() {
        this.auth.signIn(this.userData).subscribe(res => {
            this.localStorageservice.set('token', res['data']['token']);
            this.localStorageservice.set('user', res['data']['user']);
            this.router.navigate(['web/admin/personal-room']);
        });
    }

}