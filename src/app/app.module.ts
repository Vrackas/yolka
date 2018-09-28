import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './web/home/home.module';
import {WebModule} from './web/web.module';
import {SharedModule} from './shared/shared.module';
// import {AdminModule} from './admin/admin.module';
import {ModuleRouting} from './app-routing';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {AuthenticationInterceptor} from './shared/services/authentication.interceptor';
import {ModalModule} from "ngx-bootstrap";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AuthModule,
        WebModule,
        FormsModule,
        RouterModule,
        SharedModule,
        ModuleRouting,
        ModalModule.forRoot(),
        // AdminModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true,
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
