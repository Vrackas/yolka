import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EntryModalComponent} from "../entry_modal/entry_modal.component";
import {BsModalService} from "ngx-bootstrap";
import {RegistrationModalComponent} from "../registration_modal/registration_modal.component";
import {LoginModalComponent} from "../login_modal/login_modal.component";

@Component({
    selector: 'app-forgot-password-modal',
    templateUrl: './forgot_password_modal.component.html',
    styleUrls: ['./forgot_password_modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {

    constructor(public modalRef: BsModalRef,
                private modalService: BsModalService) {
    }

    ngOnInit() {
    }

    back(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(LoginModalComponent, {
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

}