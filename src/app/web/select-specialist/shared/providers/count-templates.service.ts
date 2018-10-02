import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataTemplateService {

    public date = {
        count: 0
    };

    private templateSource = new BehaviorSubject(this.date);
    currentTemplate = this.templateSource.asObservable();

    constructor() { }

    changeTempate(formData: any) {
        this.templateSource.next(formData);
    }
}