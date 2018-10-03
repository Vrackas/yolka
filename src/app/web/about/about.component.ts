import {Component} from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import {Router} from "@angular/router";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    advantages_list = [
        {
            img: '../assets/img/web/about/about_1.png',
            title: 'Yolka - сервис, какой он есть',
            text: 'Мы в Yolka стремимся сделать услуги профессиональной уборки доступными для широкой аудитории, а не роскошью для богатых. Кроме этого, мы обеспечиваем работой проверенных специалистов, которые любят и умеют заниматься уборкой. Связывая вас и профессиональных клинеров, мы хотим помочь сделать вашу квартиру еще уютнее по доступным ценам.'
        },
        {
            img: '../assets/img/web/about/about_2.png',
            title: 'Как это работает',
            text: 'Вы указываете адрес и фронт работ, выбираете удобное время, оплачиваете заказ. Мы назначаем проверенного специалиста на ваш заказ, напоминаем о нем за день. В день уборки специалист приезжает к обусловленному времени и делает все чисто.'
        },
        {
            img: '../assets/img/web/about/about_3.png',
            title: 'Команда',
            text: 'Каждый клинер, который хочет стать участником нашей сети, проходит жесткий отбор и обучение, что позволяет нам соблюдать стандарты уборки Yolka и в полной мере соответствовать ожиданиям наших клиентов.'
        },
        {
            img: '../assets/img/web/about/about_4.png',
            title: 'Почему «эко» ',
            text: 'Взрослый человек скорее нормально переносит химию, а вот дети и домашние животные — не всегда. Поэтому мы выбрали чистящие средства с активными веществами растительного происхождения, которые безопасны для всех.'
        },
        {
            img: '../assets/img/web/about/about_5.png',
            title: 'Безопасность',
            text: 'Все наши специалисты проходят тщательную проверку как профессиональных качеств, так и благонадежности.'
        },
        {
            img: '../assets/img/web/about/about_6.png',
            title: 'Гарантия',
            text: 'Маловероятно, но если вы останетесь недовольны уборкой, сообщите нам об этом в течение 24 часов. Мы уберемся еще раз. Бесплатно.'
        }
    ];
    founders_list = [{
        img: '../assets/img/web/about/pahomov.png',
        name: 'Пахомов Дмитрий',
        mail: 'd.pahomov@yolka-clean.ru',
        link_vk: '',
        link_insta: ''
    },
        {
            img: '../assets/img/web/about/kazantsev.png',
            name: 'Казанцев Владислав',
            mail: 'imprlteam@gmail.com',
            link_vk: '',
            link_insta: ''
        }
    ];

    constructor(public localStorageService: LocalStorageService,
                public router: Router) {

    }

    selectSpec() {
        if (!this.localStorageService.get('user')) {
            this.router.navigate(['web/login']);
        } else {
            this.router.navigate(['web/select-specialist']);
        }
    }
}
