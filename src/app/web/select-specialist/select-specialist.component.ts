import {Component, OnInit} from "@angular/core";
import {DataTemplateService} from "./shared/providers/count-templates.service";

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
    public data = {};

    constructor(public dataType: DataTemplateService) {

    }

    ngOnInit() {
        this.dataType.currentTemplate.subscribe(data => {
            this.data = data;
            console.log(data);
        });
    }

    next() {
        console.log(this.data);
    }

    select() {
        this.dataType.changeTempate(this.data);
    }
}