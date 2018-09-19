import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WebComponent} from "./web.component";


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
            }

        ]
    }
];


export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(WEB_ROUTING);


