import { Component, OnInit } from "@angular/core";
import { DataTemplateService } from "../shared/providers/count-templates.service";

@Component({
    selector: 'app-windows',
    templateUrl: './windows.component.html',
    styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {

    // public title = 'Виды уборки';
    public data: any;

    constructor(private dataTemplate: DataTemplateService) {

    }

    ngOnInit() {
        console.log('first block');
        this.dataTemplate.currentTemplate.subscribe(data => {
            this.data = data;
            if (this.data.window_count != 3) {
                this.data.window_count = 1;
            }
        });
    }

    next(data: any) {
        if (this.data.window_count == 1 || this.data.window_count == 2) {
            this.data.window_count++;
        } else {
            this.data['count'] = 500;
            this.dataTemplate.changeTempate(this.data);
        }
        console.log(this.data);
    }

    back() {
        if (this.data.window_count == 3 || this.data.window_count == 2) {
            this.data.window_count--;
        } else {
            this.data['count'] = 1;
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