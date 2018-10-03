import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from "ngx-bootstrap";

@Component({
    selector: 'app-my-cleaning',
    templateUrl: './my-cleaning.component.html',
    styleUrls: ['./my-cleaning.component.scss']
})
export class MyCleaningComponent implements OnInit {

    // list = [
    //     {
    //         avatar: 'assets/img/admin/camp.png',
    //         name: 'Елена Горюнова',
    //         positions: 'специалист по уборке',
    //         like: '4.9',
    //         feadback: '12',
    //     },
    //     {
    //         avatar: 'assets/img/admin/camp.png',
    //         name: 'Елена Горюнова',
    //         positions: 'специалист по уборке',
    //         like: '4.9',
    //         feadback: '12',
    //     },
    //     {
    //         avatar: 'assets/img/admin/camp.png',
    //         name: 'Елена Горюнова',
    //         positions: 'специалист по уборке',
    //         like: '4.9',
    //         feadback: '12',
    //     }
    // ];

    public list: any;

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.forEach(data => {
            this.list = data['data']['entity'];
        });
    }
}