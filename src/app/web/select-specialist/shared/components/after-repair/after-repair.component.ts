import { Component } from "@angular/core";
import { DataTemplateService } from "../../providers/count-templates.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-store";

@Component({
    selector: 'app-after-repair',
    templateUrl: './after-repair.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class AfterRepairComponent {

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
            this.data['sub_type'] = 'Коттедж';
        }
        this.data['type'] = 'После уборки';
        this.localStorageService.set('data', this.data);
        this.dataType.changeTempate(this.data);
        this.router.navigate(['web/select-specialist-second']);
    }

}