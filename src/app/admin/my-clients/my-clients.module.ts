import { NgModule } from "@angular/core";
import { NgxSelectModule } from 'ngx-select-ex';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule, PaginationModule } from "ngx-bootstrap";
import { MyClientComponent } from "./my-clients.component";

@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
    ],
    declarations: [
        MyClientComponent
    ],
    providers: [

    ],
    bootstrap: []
})
export class MyClientModule {

}