import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ModuleRouting} from "./web-routing";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "./header/header.module";
import {AboutModule} from "./about/about.module";
import {FooterModule} from "./footer/footer.module";
import {ModalModule} from "ngx-bootstrap";
import {WebComponent} from "./web.component";
import {HomeComponent} from "./home/home.component";
import {SelectSpecModalComponent} from "./shared/components/select_spec_modal/select_spec_modal.component";
import {EntryModalComponent} from "./shared/components/entry_modal/entry_modal.component";
import {LoginModalComponent} from "./shared/components/login_modal/login_modal.component";
import {RegistrationModalComponent} from "./shared/components/registration_modal/registration_modal.component";
import {ForgotPasswordModalComponent} from "./shared/components/forgot_password_modal/forgot_password_modal.component";
import { AdminModule } from '../admin/admin.module';
import { ComponentsRepairsModalModule } from './shared/components/select_spec_modal/components/components-repairs-modal.modal';
import { RoleGuardService } from '../shared/guard/role-guard.service';
import { SelectSpecialistModule } from './select-specialist/select-specialist.module';

@NgModule({
    imports: [
        CommonModule,
        ModuleRouting,
        FormsModule,
        HeaderModule,
        AboutModule,
        FooterModule,
        ModalModule.forRoot(),
        AdminModule,
        ComponentsRepairsModalModule,
        SelectSpecialistModule
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
        RoleGuardService
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
