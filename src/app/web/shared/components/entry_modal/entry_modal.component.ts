import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {LoginModalComponent} from "../login_modal/login_modal.component";
import {BsModalService} from "ngx-bootstrap";
import {RegistrationModalComponent} from "../registration_modal/registration_modal.component";

@Component({
    selector: 'app-entry-modal',
    templateUrl: './entry_modal.component.html',
    styleUrls: ['./entry_modal.component.scss']
})
export class EntryModalComponent implements OnInit {

    constructor(public modalRef: BsModalRef,
                private modalService: BsModalService) {
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
    openRegistration(): void {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(RegistrationModalComponent, {
            initialState: {
                data: {}
            }

        });

    }
}