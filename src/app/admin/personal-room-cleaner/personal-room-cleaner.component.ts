import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-personal-room-cleaner',
    templateUrl: './personal-room-cleaner.component.html',
    styleUrls: ['./personal-room-cleaner.component.scss']
})
export class PersonalRoomCleanerComponent implements OnInit {

    public user;
    public open;

    constructor(public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach(data => {
            if (data['data']['entity'].length) {
                this.user = data['data']['entity'][0]['cleaner'];
                this.open = true;
            } else {
                this.open = false;
            }
        });
    }
}