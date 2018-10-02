import { Component, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SelectSpecModalComponent } from "../shared/components/select_spec_modal/select_spec_modal.component";
import { element } from "protractor";
import { AuthService } from '../../auth/shared/services/auth.service';


declare interface SignInData {
    email: string;
    password: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    modalRef: BsModalRef;
    userData: SignInData;

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
            position: 'специалист по уборке',
            rating: '4,9',
            reviews: 'Отзывов: 12'
        },
        {
            img: '../assets/img/web/home/employee_img_2.png',
            title: 'Эльми Равшанова',
            position: 'специалист по уборке',
            rating: '4,7',
            reviews: 'Отзывов: 10'
        },
        {
            img: '../assets/img/web/home/employee_img_3.png',
            title: 'Эрика Шпенглер',
            position: 'специалист по уборке',
            rating: '5,0',
            reviews: 'Отзывов: 16'
        },
        {
            img: '../assets/img/web/home/employee_img_4.png',
            title: 'Чумак Ирина',
            position: 'специалист по химчистки',
            rating: '4,6',
            reviews: 'Отзывов: 9'
        }];
    for_list = [
        {
            img: '../assets/img/web/home/for_item_1.png',
            title: 'Yolka Discount',
            text: '-Целый пул ежемесячных акций.  -Сможем наводить порядок у вас на квартире уже через 90 минут. -Прозрачная накопительная система. -Постоянные розыгрыши от наших партнёров. -Бесплатная Служба доставки ключей.',
            link: 'Подробнее'
        }, {
            img: '../assets/img/web/home/for_item_2.png',
            title: 'YolkaPOOL',
            text: 'Совместные уборки - это выгодно Сервис YolkaPOOL помогает найти пользователя который живёт в вашем доме. Услуга будет очень выгодной за счёт сокращения логистики.',
            link: 'Подробнее'
        }, {
            img: '../assets/img/web/home/for_item_3.png',
            title: 'Yolka для бизнеса',
            text: 'Чистота дома это хорошо,но на работе мы находимся большее время. Yolka поможет найти для вас уборщицу по системе YolkaPOOL для вашего офиса. Что бы услуга была по настоящему выгодная.',
            link: 'Yolka для Бизнеса'
        }
    ];
    bottom_top_list = [
        {
            text: 'Изменяйте и переносите заказы.'
        }, {
            text: 'Связь со специалистом напрямую.'
        }, {
            text: 'Напоминания и уведомления.'
        }
    ];
    bottom_middle_list = [
        {
            img: '../assets/img/web/home/bottom_middle_item1.png',
            text: 'Yolka показывает всем, что можно и нужно. Они делают большое дело. Так давайте им в этом поможем.'
        }, {
            img: '../assets/img/web/home/bottom_middle_item2.png',
            text: 'Самая технологичная компания в сфере профессиональной уборки и бытовых услуг. Даже фрикам и силиконовой долины не пришла в голову такая идея. Гордимся.'
        }, {
            img: '../assets/img/web/home/bottom_middle_item3.png',
            text: 'Они консолидируют рынок, делают что то новое и полезное для людей. У них большое будущее.'
        }
    ];


    constructor(
        private modalService: BsModalService,
        public el: ElementRef,
        public auth: AuthService) {
    }


    openModal(): void {
        this.modalRef = this.modalService.show(SelectSpecModalComponent, {
            initialState: {
                title: 'Виды уборки',
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
