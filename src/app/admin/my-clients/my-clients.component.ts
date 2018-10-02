import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from "ngx-bootstrap";

@Component({
    selector: 'app-my-clients',
    templateUrl: './my-clients.component.html',
    styleUrls: ['./my-clients.component.scss']
})
export class MyClientComponent implements OnInit {

    list = [
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'специалист по уборке',
            like: '4.9',
            feadback: '12',
        },
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'специалист по уборке',
            like: '4.9',
            feadback: '12',
        },
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'специалист по уборке',
            like: '4.9',
            feadback: '12',
        }
    ];

    constructor() { }

    ngOnInit() {
    }
}