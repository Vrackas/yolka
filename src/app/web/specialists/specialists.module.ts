import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialistsComponent} from './specialists.component';
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
        SpecialistsComponent
    ],
    providers: [

    ]
    // ,
    // exports: [
    //     SpecialistsComponent
    // ]
})
export class SpecialistsModule {
    constructor() {
    }
}
