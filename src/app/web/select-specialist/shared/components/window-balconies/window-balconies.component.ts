import { Component } from "@angular/core";
import { DataTemplateService } from "../../providers/count-templates.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-store";

@Component({
    selector: 'app-window-balconies',
    templateUrl: './window-balconies.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class WindowBalconiesComponent {

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
        if (this.data['repair'] == 3) {
            this.data['price'] = 800;
        }

        if (this.data['home'] == 1) {
            this.data['sub_type'] = 'Обычные загрязнения';
        } else {
            this.data['sub_type'] = 'Послестрой';
        }
        this.data['type'] = 'Окна/балконы';
        this.localStorageService.set('data', this.data);
        this.dataType.changeTempate(this.data);
        this.router.navigate(['web/select-specialist-second']);
    }
}