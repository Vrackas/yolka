import { NgModule } from "@angular/core";
import { NgxSelectModule } from 'ngx-select-ex';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataTemplateService } from "../select-specialist/shared/providers/count-templates.service";
import { SelectSpecialistSecondComponent } from "./select-specialist-second.component";
import { GetAllCleaningService } from "./shared/services/get-all-cleaning.service";
import { GetAllCleaningResolve } from "./shared/resolvers/get-all-cleaning-resolve.service";

@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        SelectSpecialistSecondComponent
    ],
    providers: [
        DataTemplateService,
        GetAllCleaningService,
        GetAllCleaningResolve
    ],
})
export class SelectSpecialistSecondModule {

}