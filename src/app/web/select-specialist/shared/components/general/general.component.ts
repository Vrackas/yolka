import { Component } from "@angular/core";
import { DataTemplateService } from "../../providers/count-templates.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-store";


@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class GeneralComponent {
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
        } else if (this.data.home == 2) {
            this.data['price'] = 1600;
            this.data['sub_type'] = 'Коттедж';
        } else if (this.data.home == 3) {
            this.data['price'] = 500;
            this.data['sub_type'] = 'Генеральная только сан/узла';
        } else {
            this.data['price'] = 1500;
            this.data['sub_type'] = 'Генеральная только кухни';
        }
        this.data['type'] = 'Генеральная';
        this.localStorageService.set('data', this.data);
        this.dataType.changeTempate(this.data);
        this.router.navigate(['web/select-specialist-second']);
    }

}
