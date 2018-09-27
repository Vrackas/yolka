import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EntryModalComponent} from "../entry_modal/entry_modal.component";
import {BsModalService} from "ngx-bootstrap";

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

}