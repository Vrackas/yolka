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
import {RegistrationModalComponent} from "./shared/components/registration_modal/registration_modal.component";
import {ForgotPasswordModalComponent} from "./shared/components/forgot_password_modal/forgot_password_modal.component";

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
        LoginModalComponent,
        RegistrationModalComponent,
        ForgotPasswordModalComponent

    ],
    providers: [

    ],
    entryComponents: [
        SelectSpecModalComponent,
        EntryModalComponent,
        LoginModalComponent,
        RegistrationModalComponent,
        ForgotPasswordModalComponent
    ]
})
export class WebModule {
    constructor() {
        console.log('Web module is loaded');
    }
}
