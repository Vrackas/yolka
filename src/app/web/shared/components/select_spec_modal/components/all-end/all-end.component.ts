import { Component, OnInit } from "@angular/core";
import { DataTemplateService } from "../shared/providers/count-templates.service";

@Component({
    selector: 'app-all-end',
    templateUrl: './all-end.component.html',
    styleUrls: ['./all-end.component.scss']
})
export class AllEndComponent implements OnInit {

    // public title = 'Виды уборки';
    public data: any;

    constructor(private dataTemplate: DataTemplateService) {

    }

    ngOnInit() {
        console.log('first block');
        this.dataTemplate.currentTemplate.subscribe(data => {
            this.data = data;
            this.data.all_end_count = 1;
        });
    }

    next(data: any) {
        if (this.data.all_end_count == 1 || this.data.all_end_count == 2) {
            this.data.all_end_count++;
        } else {
            this.data['count']++;
            this.dataTemplate.changeTempate(this.data);
        }
        console.log(this.data);
    }

    back() {
        if (this.data.all_end_count == 3 || this.data.all_end_count == 2) {
            this.data.all_end_count--;
        } else {
            if (this.data.windows == 1) {
                this.data['count'] = 2;
            } else {
                this.data['count'] = 1;
            }
            this.dataTemplate.changeTempate(this.data);
        }
        console.log(this.data);
    }

    finish() {
        this.data.end = true;
        this.dataTemplate.changeTempate(this.data);
        console.log('finish');
    }

    select(id: number) {
        console.log(id, 'select repair');
        this.data.count = id;
        this.dataTemplate.changeTempate(this.data);
    }

}