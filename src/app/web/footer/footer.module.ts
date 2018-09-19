import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
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
        FooterComponent
    ],
    providers: [

    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
    constructor() {
        // console.log('Home module is loaded');
    }
}
