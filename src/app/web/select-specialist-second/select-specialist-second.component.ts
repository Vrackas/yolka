import { Component, OnInit } from "@angular/core";
import { DataTemplateService } from "../select-specialist/shared/providers/count-templates.service";
import { LocalStorageService } from "ngx-store";
import { ActivatedRoute, Router } from "@angular/router";
import { GetAllCleaningService } from "./shared/services/get-all-cleaning.service";

@Component({
    selector: 'app-select-specialist-second',
    templateUrl: './select-specialist-second.component.html',
    styleUrls: ['./select-specialist-second.component.scss']
})
export class SelectSpecialistSecondComponent implements OnInit {

    public data: any;
    public form: any;
    list = [
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'специалист по уборке',
            like: '4.9',
            feadback: '12',
        },
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'специалист по уборке',
            like: '4.9',
            feadback: '12',
        },
        {
            avatar: 'assets/img/admin/camp.png',
            name: 'Елена Горюнова',
            positions: 'специалист по уборке',
            like: '4.9',
            feadback: '12',
        }
    ];

    constructor(
        public localStorageService: LocalStorageService,
        public dataType: DataTemplateService,
        public route: ActivatedRoute,
        public service: GetAllCleaningService,
        public router: Router
    ) {

    }

    ngOnInit() {
        this.dataType.currentTemplate.subscribe(data => {
            this.data = data;
            if (!this.localStorageService.get('price')) {
                this.localStorageService.set('price', data['price']);
            } else if (this.localStorageService.get('price') != this.data['price']) {
                this.localStorageService.set('price', data['price']);
            } else {
                this.data = this.localStorageService.get('data');
                this.data['price'] = this.localStorageService.get('price');
            }
        });
        this.route.data.forEach(data => {
            this.list = data['data']['entity'];
        });
    }

    takeCleaner(id) {
        console.log(this.data);
        this.form = {
            type: this.data['type'],
            subtype: this.data['sub_type'],
            price: this.data['price'],
            cleaner_id: id,
            date: new Date()
        };
        this.service.createCleaner(this.form).subscribe(() => {
            this.router.navigate(['web/admin/my-cleaners']);
        });
    }

    select() {
        this.dataType.changeTempate(this.data);
    }
}