import {Component, ElementRef, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {SelectSpecModalComponent} from "../shared/components/select_spec_modal/select_spec_modal.component";
import {element} from "protractor";


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
    employee_list = [
        {
            img: '../assets/img/web/home/employee_img_1.png',
            title: 'Елена Горюнова',
            position: 'уборщица',
            rating: '4,9',
            reviews: 'Отзывов: 12'
        },
        {
            img: '../assets/img/web/home/employee_img_2.png',
            title: 'Эльми Равшанова',
            position: 'уборщица',
            rating: '4,7',
            reviews: 'Отзывов: 10'
        },
        {
            img: '../assets/img/web/home/employee_img_3.png',
            title: 'Эрика Шпенглер',
            position: 'уборщица',
            rating: '5,0',
            reviews: 'Отзывов: 16'
        },
        {
            img: '../assets/img/web/home/employee_img_4.png',
            title: 'Чумак Ирина',
            position: 'химчистка мебели',
            rating: '4,6',
            reviews: 'Отзывов: 9'
        }];

    constructor(private modalService: BsModalService, public el: ElementRef) {
    }


    openModal(): void {
        this.modalRef = this.modalService.show(SelectSpecModalComponent, {
            initialState: {
                title: 'THIS IS MODAL',
                data: {}
            }

        });
    }

    accordionEffect(id: string) {
        let element = document.getElementById(id);
        switch (element.classList.contains('active')) {
            case true:
                element.classList.remove('active');
                break;
            case false:
                element.classList.add('active');
                break;

        }
        console.log(element);
    }


}
