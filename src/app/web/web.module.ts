import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebComponent} from './web.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {WebRoutingModule} from './web-routing';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        WebRoutingModule,
        FormsModule
    ],
    declarations: [
        WebComponent,
        HeaderComponent,
        HomeComponent
    ],
    providers: [

    ]
})
export class WebModule {
    constructor() {
        console.log('Web module is loaded');
    }
}
