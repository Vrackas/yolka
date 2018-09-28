import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EntryModalComponent} from "../entry_modal/entry_modal.component";
import {BsModalService} from "ngx-bootstrap";
import {RegistrationModalComponent} from "../registration_modal/registration_modal.component";
import {ForgotPasswordModalComponent} from "../forgot_password_modal/forgot_password_modal.component";

@Component({
    selector: 'app-login-modal',
    templateUrl: './login_modal.component.html',
    styleUrls: ['./login_modal.component.scss']
})
export class LoginModalComponent implements OnInit {

    constructor(public modalRef: BsModalRef,
                private modalService: BsModalService) {
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

}