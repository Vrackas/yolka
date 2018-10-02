import { Component, OnInit } from "@angular/core";
import { DataTemplateService } from "../shared/providers/count-templates.service";

@Component({
    selector: 'app-general-cleaning',
    templateUrl: './general-cleaning.component.html',
    styleUrls: ['./general-cleaning.component.scss']
})
export class GeneralCleaningComponent implements OnInit {

    // public title = 'Виды уборки';
    public data: any;

    constructor(private dataTemplate: DataTemplateService) { }

    ngOnInit() {
        console.log('first block');
        this.dataTemplate.currentTemplate.subscribe(data => {
            this.data = data;
            if (this.data.chois_count != 2) {
                this.data.chois_count = 1;
            }
        });
    }

    next(data: any) {
        if (this.data.chois_count == 1) {
            this.data.chois_count++;
        } else {
            if (this.data['windows'] == 1) {
                this.data['count']++;
            } else {
                this.data['count'] = 500;
            }
            this.dataTemplate.changeTempate(this.data);
        }
        console.log(this.data);
    }

    back() {
        if (this.data.chois_count == 2) {
            this.data.chois_count--;
        } else {
            if (this.data['windows'] == 1) {
                this.data['count']--;
            } else {
                this.data['count'] = 0;
            }
            this.dataTemplate.changeTempate(this.data);
        }
        console.log(this.data);
    }

    select(id: number) {
        console.log(id, 'select repair');
        this.data.count = id;
        this.dataTemplate.changeTempate(this.data);
    }

}