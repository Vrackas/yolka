import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    declarations: [
        HomeComponent
    ],
    providers: [

    ]
})
export class HomeModule {
    constructor() {
        console.log('Home module is loaded');
    }
}
