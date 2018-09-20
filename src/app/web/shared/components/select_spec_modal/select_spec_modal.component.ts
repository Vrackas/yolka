import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-select-spec-modal',
    templateUrl: './select_spec_modal.component.html',
    styleUrls: ['./select_spec_modal.component.scss']
})
export class SelectSpecModalComponent implements OnInit {

    title;
    constructor(
        public modalRef: BsModalRef
    ) { }

    ngOnInit() {
    }

}