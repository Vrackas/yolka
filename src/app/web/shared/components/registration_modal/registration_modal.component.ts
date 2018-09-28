import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from "ngx-bootstrap";
import {LoginModalComponent} from "../login_modal/login_modal.component";

@Component({
    selector: 'app-registration-modal',
    templateUrl: './registration_modal.component.html',
    styleUrls: ['./registration_modal.component.scss']
})
export class RegistrationModalComponent implements OnInit {

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

}