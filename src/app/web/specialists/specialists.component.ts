import {Component} from '@angular/core';

@Component({
    selector: 'app-specialists',
    templateUrl: './specialists.component.html',
    styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent {

    advantages_list = [
        {
            img: '../assets/img/web/specialists/advantages_item1.png',
            title: 'Быстрые выплаты',
            text: 'Вы сами выбираете, как и когда получать оплату',
            link: ''
        },
        {
            img: '../assets/img/web/specialists/advantages_item2.png',
            title: 'Свободный график',
            text: 'Вы сами решаете, когда и как часто принимать заказы',
            link: ''
        },
        {
            img: '../assets/img/web/specialists/advantages_item3.png',
            title: 'Заказы рядом',
            text: 'Выбирайте заказы только рядом с домом и составляйте удобный для себя маршрут.',
            link: ''
        }
    ];
    reviews_list = [
        {
            img: '../assets/img/web/home/employee_img_2.png',
            name: 'Эльми Равшанова',
            position: 'специалист по уборке',
            reviews: 'Всё началось с сумасшедшей мысли: "Зачем конкурировать с 1000-ю компаниями и частными уборщицами?" Когда можно создать собственный институт чистоты! Обучать через него всех проверенных специалистов, и размещая их на нашей платформе для того, чтобы люди могли зарабатывать на прямую, честно и без посредников.'
        },
        {
            img: '../assets/img/web/home/employee_img_3.png',
            name: 'Эрика Шпенглер',
            position: 'специалист по уборке',
            reviews: 'Всё началось с сумасшедшей мысли: "Зачем конкурировать с 1000-ю компаниями и частными уборщицами?" Когда можно создать собственный институт чистоты! Обучать через него всех проверенных специалистов, и размещая их на нашей платформе для того, чтобы люди могли зарабатывать на прямую, честно и без посредников.'
        },
        {
            img: '../assets/img/web/home/employee_img_4.png',
            name: 'Чумак Ирина',
            position: 'специалист по химчистки',
            reviews: 'Всё началось с сумасшедшей мысли: "Зачем конкурировать с 1000-ю компаниями и частными уборщицами?" Когда можно создать собственный институт чистоты! Обучать через него всех проверенных специалистов, и размещая их на нашей платформе для того, чтобы люди могли зарабатывать на прямую, честно и без посредников.'
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
    security_list = [
        {

            img: '../assets/img/web/specialists/security_item1.png',
            title: 'Функции обеспечения безопасности',
            text: 'Делитесь информацией о своих перемещениях с близкими. Связывайтесь с поддержкой и экстренными службами в одно касание. Новые технологии Yolka обеспечивают максимальную безопасность.'
        },
        {
            img: '../assets/img/web/specialists/security_item2.png',
            title: 'Помощь всегда рядом',
            text: 'В приложении Yolka реализованы прямая связь со службами экстренной помощи, круглосуточная поддержка и другие важные функции безопасности.'
        },
        {
            img: '../assets/img/web/specialists/security_item3.png',
            title: 'Услуги для всех',
            text: 'Соблюдение Правил сообщества — залог успешного взаимодействия миллионов пользователей и партнеров Yolka.'
        }
        ];
    constructor() {
        // console.log('home Component is loaded');
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
