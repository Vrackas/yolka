import { NgModule } from "@angular/core";
import { WebStorageModule } from "ngx-store";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { PerosnalRoomCleanerModule } from "./personal-room-cleaner/personal-room-cleaner.module";
import { MyClientModule } from "./my-clients/my-clients.module";
import { MyCleanersModule } from "./my-cleaners/my-cleaners.module";
import { PerosnalRoomClientModule } from "./personal-room-client/personal-room-client.module";
import { GetMyCleaningService } from "./shared/services/get-my-cleaning.service";
import { GetMyCleaningResolve } from "./shared/resolvers/get-my-cleaning-resolve.service";

@NgModule({
    imports: [
        WebStorageModule,
        CommonModule,
        RouterModule,
        PerosnalRoomClientModule,
        MyCleanersModule,
        MyClientModule,
        PerosnalRoomCleanerModule
    ],
    declarations: [
        AdminComponent,
        SidebarComponent
    ],
    providers: [
        GetMyCleaningService,
        GetMyCleaningResolve
    ]
})
export class AdminModule {
}
