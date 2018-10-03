import { Component } from "@angular/core";
import { DataTemplateService } from "../../providers/count-templates.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-store";

@Component({
    selector: 'app-supporting',
    templateUrl: './supporting.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class SupportingComponent {

    public data: any;

    constructor(
        public dataType: DataTemplateService,
        public router: Router,
        public localStorageService: LocalStorageService
    ) {
        this.dataType.currentTemplate.subscribe(data => {
            this.data = data;
        });
    }

    next() {
        if (this.data.home == 1) {
            this.data['price'] = 1300;
            this.data['sub_type'] = 'Квартира';
        } else {
            this.data['price'] = 1600;
            this.data['sub_type'] = 'Коттедж/дом';
        }
        this.data['type'] = 'Поддерживающая';
        this.localStorageService.set('data', this.data);
        this.dataType.changeTempate(this.data);
        this.router.navigate(['web/select-specialist-second']);
    }


}