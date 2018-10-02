import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-personal-room-client',
    templateUrl: './personal-room-client.component.html',
    styleUrls: ['./personal-room-client.component.scss']
})
export class PersonalRoomClientComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        console.log('cleaing');
    }
}