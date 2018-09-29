import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-cleaning-info',
    templateUrl: './cleaning-info.component.html',
    styleUrls: ['./cleaning-info.component.scss']
})
export class CleaningInfoComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        console.log('cleaing');
    }
}