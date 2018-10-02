import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from "ngx-bootstrap";
import { LocalStorageService } from "ngx-store";

@Component({
    selector: 'app-my-cleaners',
    templateUrl: './my-cleaners.component.html',
    styleUrls: ['./my-cleaners.component.scss']
})
export class MyCleanersComponent implements OnInit {

    tableHeader: any;
    public role;
    list = [
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        },
        {
            date: new Date(),
            typeCleaner: 'Уборка двухкомнатной квартиры',
            profesional: 'Специалист',
            client: 'Татьяна',
            cost: '2400 р.'
        }
    ];

    constructor(
        public route: ActivatedRoute,
        public localStorageService: LocalStorageService
    ) {
    }

    ngOnInit() {
        this.role = this.localStorageService.get('user')['role'];
        if (this.role == 'cleaner') {
            this.tableHeader = ['Дата', 'Вид уборки', 'Клиент', 'Стоимость'];
        } else {
            this.tableHeader = ['Дата', 'Вид уборки', 'Специалист', 'Стоимость'];
        }
        this.route.data.forEach(success => {
            if (success['data']) {
                // this.list = success['data']['entity'];
            }
        });
    }
}