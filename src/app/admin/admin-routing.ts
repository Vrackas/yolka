import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';
import {CleaningInfoComponent} from "./cleaning-info/cleaning-info.component";

const ADMIN_ROUTING: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: '', redirectTo: 'cleaning-info', pathMatch: 'full'},
            {path: 'cleaning-info', component: CleaningInfoComponent}
        ]
    },
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(ADMIN_ROUTING);
