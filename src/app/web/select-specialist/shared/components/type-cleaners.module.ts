import {NgModule} from "@angular/core";
import {NgxSelectModule} from 'ngx-select-ex';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AfterRepairComponent} from "./after-repair/after-repair.component";
import {DryCleaningComponent} from "./dry-cleaning/dry-cleaning.component";
import {GeneralComponent} from "./general/general.component";
import {SupportingComponent} from "./supporting/supporting.component";
import {WindowBalconiesComponent} from "./window-balconies/window-balconies.component";

@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        AfterRepairComponent,
        DryCleaningComponent,
        GeneralComponent,
        SupportingComponent,
        WindowBalconiesComponent
    ],
    providers: [],
    exports: [
        AfterRepairComponent,
        DryCleaningComponent,
        GeneralComponent,
        SupportingComponent,
        WindowBalconiesComponent
    ]
})
export class TypeCleanersModule {

}