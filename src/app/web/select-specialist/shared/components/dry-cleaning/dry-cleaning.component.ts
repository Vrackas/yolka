import { Component } from "@angular/core";
import { DataTemplateService } from "../../providers/count-templates.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-store";

@Component({
    selector: 'app-dry-cleaning',
    templateUrl: './dry-cleaning.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class DryCleaningComponent {

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
        this.data['price'] = 500;
        this.data['type'] = 'Химчистка';
        if (this.data.home == 1) {
            this.data['sub_type'] = 'Диваны';
        } else if (this.data.home == 2) {
            this.data['sub_type'] = 'Ковры';
        } else if (this.data.home == 3) {
            this.data['sub_type'] = 'Матрасы';
        } else {
            this.data['sub_type'] = 'Прочее';
        }
        this.localStorageService.set('data', this.data);
        this.dataType.changeTempate(this.data);
        this.router.navigate(['web/select-specialist-second']);
    }


}