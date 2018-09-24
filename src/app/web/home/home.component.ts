import {Component, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {SelectSpecModalComponent} from "../shared/components/select_spec_modal/select_spec_modal.component";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    modalRef: BsModalRef;

    advantage_choose_list = [
        {
            title: 'Уборка',
            img: '../assets/img/web/home/choose_item1.png',
            link: 12
        },
        {
            title: 'химчистка мебели',
            img: '../assets/img/web/home/choose_item2.png',
            link: 12
        },
        {
            title: 'мастер на час',
            img: '../assets/img/web/home/choose_item3.png',
            link: 12
        },
        {
            title: 'магазин для дома',
            img: '../assets/img/web/home/choose_item4.png',
            link: 12
        }
    ];
    customClass: string = 'customClass';

    constructor(private modalService: BsModalService) {
    }


    openModal(): void {
        this.modalRef = this.modalService.show(SelectSpecModalComponent, {
            initialState: {
                title: 'THIS IS MODAL',
                data: {}
            }

        });
    }


}
