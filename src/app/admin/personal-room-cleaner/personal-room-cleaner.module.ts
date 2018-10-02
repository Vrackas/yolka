import { NgModule } from "@angular/core";
import { NgxSelectModule } from 'ngx-select-ex';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule, PaginationModule } from "ngx-bootstrap";
import { PersonalRoomCleanerComponent } from "./personal-room-cleaner.component";


@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        PersonalRoomCleanerComponent
    ],
    providers: [

    ],
    bootstrap: []
})
export class PerosnalRoomCleanerModule {

}