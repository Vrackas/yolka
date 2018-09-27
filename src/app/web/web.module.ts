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
import {SelectSpecModalComponent} from "./shared/components/select_spec_modal/select_spec_modal.component";
import {EntryModalComponent} from "./shared/components/entry_modal/entry_modal.component";
import {LoginModalComponent} from "./shared/components/login_modal/login_modal.component";

@NgModule({
    imports: [
        CommonModule,
        ModuleRouting,
        FormsModule,
        HeaderModule,
        AboutModule,
        FooterModule,
    ],
    declarations: [
        WebComponent,
        HomeComponent,
        SelectSpecModalComponent,
        EntryModalComponent,
        LoginModalComponent
    ],
    providers: [

    ],
    entryComponents: [
        SelectSpecModalComponent,
        EntryModalComponent,
        LoginModalComponent
    ]
})
export class WebModule {
    constructor() {
        console.log('Web module is loaded');
    }
}
