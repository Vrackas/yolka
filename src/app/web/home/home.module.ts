import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
// import { AccordionModule } from 'ngx-accordion';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {BsModalService} from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
    ],
    declarations: [
        HomeComponent
    ],
    providers: [

    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule {
    constructor() {
        console.log('Home module is loaded');
    }
}
