import { Component, OnInit } from "@angular/core";
import { DataTemplateService } from "../select-specialist/shared/providers/count-templates.service";

@Component({
    selector: 'app-select-specialist-second',
    templateUrl: './select-specialist-second.component.html',
    styleUrls: ['./select-specialist-second.component.scss']
})
export class SelectSpecialistSecondComponent implements OnInit {

    public data: any;
    list = [
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'уборщица',
            like: '4.9',
            feadback: '12',
        },
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'уборщица',
            like: '4.9',
            feadback: '12',
        },
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'уборщица',
            like: '4.9',
            feadback: '12',
        }
    ];

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