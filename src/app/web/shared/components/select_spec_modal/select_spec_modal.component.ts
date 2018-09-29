import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTemplateService } from './components/shared/providers/count-templates.service';

@Component({
    selector: 'app-select-spec-modal',
    templateUrl: './select_spec_modal.component.html',
    styleUrls: ['./select_spec_modal.component.scss']
})
export class SelectSpecModalComponent implements OnInit {

    title;
    public count: number;

    constructor(
        public modalRef: BsModalRef,
        private dataTemplate: DataTemplateService
    ) { }

    ngOnInit() {
        this.dataTemplate.currentTemplate.subscribe(dateForm => {
            this.count = dateForm['count'];
            if (dateForm['end']) {
                this.cloce();
            }
        });
    }

    cloce() {
        this.modalRef.hide();
    }

}