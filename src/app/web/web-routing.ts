import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WebComponent} from "./web.component";
import {AdminComponent} from '../admin/admin.component';
import {CleaningInfoComponent} from "../admin/cleaning-info/cleaning-info.component";


const WEB_ROUTING: Routes = [
    {
        path: 'web',
        component: WebComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {path: '', redirectTo: 'cleaning-info', pathMatch: 'full'},
                    {path: 'cleaning-info', component: CleaningInfoComponent}
                ]
            }

        ]
    }
];


export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(WEB_ROUTING);


