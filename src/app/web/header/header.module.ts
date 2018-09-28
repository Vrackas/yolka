import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ModalModule.forRoot(),
    ],
    declarations: [
        HeaderComponent
    ],
    providers: [

    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
    constructor() {
        // console.log('Home module is loaded');
    }
}
