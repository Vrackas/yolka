import {Component} from "@angular/core";

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class GeneralComponent {
    public data = {
        home: ''
    };

    constructor() {
    }
}