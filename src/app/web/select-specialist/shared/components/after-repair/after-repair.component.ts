import { Component } from "@angular/core";
import { DataTemplateService } from "../../providers/count-templates.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-after-repair',
    templateUrl: './after-repair.component.html',
    styleUrls: ['../../../select-specialist.component.scss']
})
export class AfterRepairComponent {

    public data: any;

    constructor(
        public dataType: DataTemplateService,
        public router: Router
    ) {
        this.dataType.currentTemplate.subscribe(data => {
            this.data = data;
        });
    }

    next() {
        this.dataType.changeTempate(this.data);
        this.router.navigate(['web/select-specialist-second']);
    }

}