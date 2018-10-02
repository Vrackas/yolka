import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-select-specialist',
    templateUrl: './select-specialist.component.html',
    styleUrls: ['./select-specialist.component.scss']
})
export class SelectSpecialistComponent implements OnInit {

    public repairs = [
        {
            id: 0,
            name: 'Поддерживающая'
        },
        {
            id: 1,
            name: 'Генеральная'
        },
        {
            id: 2,
            name: 'После ремонта'
        },
        {
            id: 3,
            name: 'Окна / Балконы'
        },
        {
            id: 4,
            name: 'Химчистка'
        },
    ];
    public data = {    };

    constructor() {

    }

    ngOnInit() {

    }
}