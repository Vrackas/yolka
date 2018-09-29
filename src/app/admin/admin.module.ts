import { NgModule } from "@angular/core";
import { WebStorageModule } from "ngx-store";
import { CommonModule } from "@angular/common";
import { ModuleRouting } from "./admin-routing";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CleaningInfoModule } from "./cleaning-info/cleaning-info.modal";
import { AdminComponent } from "./admin.component";

@NgModule({
    imports: [
        WebStorageModule,
        CommonModule,
        ModuleRouting,
        CleaningInfoModule
    ],
    declarations: [
        AdminComponent,
        SidebarComponent
    ],
    providers: [
    ]
})
export class AdminModule {
}
