import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-personal-room-client',
    templateUrl: './personal-room-client.component.html',
    styleUrls: ['./personal-room-client.component.scss']
})
export class PersonalRoomClientComponent implements OnInit {

    public user: any;
    public open: boolean;

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
        console.log('cleaing');
    }
}