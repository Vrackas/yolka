import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-personal-room-client',
    templateUrl: './personal-room-client.component.html',
    styleUrls: ['./personal-room-client.component.scss']
})
export class PersonalRoomClientComponent implements OnInit {

    public user: any;

    constructor(public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach(data => {
            this.user = data['data']['entity'][0]['cleaner'];
        });
        console.log('cleaing');
    }
}