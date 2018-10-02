import { NgModule } from "@angular/core";
import { NgxSelectModule } from 'ngx-select-ex';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SelectSpecialistComponent } from "./select-specialist.component";
import { TypeCleanersModule } from "./shared/components/type-cleaners.module";

@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        TypeCleanersModule
    ],
    declarations: [
        SelectSpecialistComponent
    ],
    providers: [
    ],
})
export class SelectSpecialistModule {

}