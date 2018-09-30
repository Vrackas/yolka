import {Component} from '@angular/core';

@Component({
    selector: 'app-specialists',
    templateUrl: './specialists.component.html',
    styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent {

    advantages_list = [{
        img: '',
        title: 'Быстрые выплаты',
        text: 'Вы сами выбираете, как и когда получать оплату',
        link: ''
    },
        {
        img: '',
        title: 'Свободный график',
        text: 'Вы сами решаете, когда и как часто принимать заказы',
        link: ''
    },
        {
        img: '',
        title: 'Заказы рядом',
        text: 'Выбирайте заказы только рядом с домом и составляйте удобный для себя маршрут.',
        link: ''
    }];

    constructor() {
        // console.log('home Component is loaded');
    }
}
