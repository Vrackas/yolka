import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebComponent} from './web.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {ModuleRouting} from "./web-routing";
import {HeaderModule} from "./header/header.module";
import {AboutModule} from "./about/about.module";
import {FooterModule} from "./footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        ModuleRouting,
        FormsModule,
        HeaderModule,
        AboutModule,
        FooterModule
    ],
    declarations: [
        WebComponent,
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
