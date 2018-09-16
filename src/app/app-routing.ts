import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './web/home/home.component';
import {WebComponent} from './web/web.component';
import {AdminComponent} from './admin/admin.component';

const APP_ROUTING: Routes = [
    {path: '', redirectTo: 'web', pathMatch: 'full'},
    {
        path:'web',
        component: WebComponent,
    },
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];


export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);

