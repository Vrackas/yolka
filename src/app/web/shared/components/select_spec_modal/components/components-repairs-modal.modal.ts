import { NgModule } from "@angular/core";
import { NgxSelectModule } from 'ngx-select-ex';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule, PaginationModule, TabsModule } from "ngx-bootstrap";
import { TypesRepairsComponent } from "./types-repairs/types-repairs.component";
import { DataTemplateService } from "./shared/providers/count-templates.service";
import { ChoiceStrategyComponent } from "./choice_strategy/choice-strategy.component";
import { WindowsComponent } from "./windows/windows.component";
import { AllEndComponent } from "./all-end/all-end.component";
import { GeneralCleaningComponent } from "./general-cleaning/general-cleaning.component";

@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [
        TypesRepairsComponent,
        ChoiceStrategyComponent,
        WindowsComponent,
        AllEndComponent,
        GeneralCleaningComponent
    ],
    providers: [
        DataTemplateService
    ],
    exports: [
        TypesRepairsComponent,
        ChoiceStrategyComponent,
        WindowsComponent,
        AllEndComponent,
        GeneralCleaningComponent
    ]
})
export class ComponentsRepairsModalModule {

}