import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        AboutComponent
    ],
    providers: [

    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule {
    constructor() {
        // console.log('Home module is loaded');
    }
}
