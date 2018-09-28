import {Component, HostListener} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {EntryModalComponent} from "../shared/components/entry_modal/entry_modal.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
        // console.log('home Component is loaded');
    }

    private element: any;

    headerWrapperOpen() {
        this.element = document.getElementsByClassName('header_site_wrapper')[0];
        this.element.classList.add('active');
    }

    headerWrapperClose(){
        this.element = document.getElementsByClassName('header_site_wrapper')[0];
        this.element.classList.remove('active');
    }

    @HostListener('window:mouseup', ['$event'])
    mouseUp(event) {
        // this.element = document.getElementsByClassName('header_site_wrapper');
        // this.element.classList.remove('active');
    }

    openModal(): void {
        this.modalRef = this.modalService.show(EntryModalComponent, {
            initialState: {
                data: {}
            }

        });
    }
}
