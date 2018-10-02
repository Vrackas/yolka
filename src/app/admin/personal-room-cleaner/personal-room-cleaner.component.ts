import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-personal-room-cleaner',
    templateUrl: './personal-room-cleaner.component.html',
    styleUrls: ['./personal-room-cleaner.component.scss']
})
export class PersonalRoomCleanerComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        console.log('cleaing');
    }
}