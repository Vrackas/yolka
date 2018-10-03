import { NgModule } from "@angular/core";
import { NgxSelectModule } from 'ngx-select-ex';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SortComponent } from "./sort/sort.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthSecondService } from "./shared/services/auth-second.service";

@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        SortComponent,
        RegisterComponent,
        LoginComponent
    ],
    providers: [
        AuthSecondService
    ],
})
export class AuthSecondModule {

}