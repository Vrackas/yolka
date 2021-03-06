import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from "./web.component";
// import {CleaningInfoComponent} from "../admin/cleaning-info/cleaning-info.component";
import { AdminComponent } from '../admin/admin.component';
import { SpecialistsComponent } from "./specialists/specialists.component";

import { PersonalRoomClientComponent } from '../admin/personal-room-client/personal-room-client.component';
import { RoleGuardService as RoleGuard } from '../shared/guard/role-guard.service';
import { MyCleanersComponent } from '../admin/my-cleaners/my-cleaners.component';
import { MyClientComponent } from '../admin/my-clients/my-clients.component';
import { PersonalRoomCleanerComponent } from '../admin/personal-room-cleaner/personal-room-cleaner.component';
import { SelectSpecialistComponent } from './select-specialist/select-specialist.component';
import { GetMyCleaningResolve } from '../admin/shared/resolvers/get-my-cleaning-resolve.service';
import { SelectSpecialistSecondComponent } from './select-specialist-second/select-specialist-second.component';
import { GetAllCleaningResolve } from './select-specialist-second/shared/resolvers/get-all-cleaning-resolve.service';
import { SortComponent } from './auth/sort/sort.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyCleaningComponent } from '../admin/my-cleaning/my-cleaning.component';
import { GetMyCleaningsResolve } from '../admin/shared/resolvers/get-my-cleanings-resolve.service';

const WEB_ROUTING: Routes = [
    {
        path: 'web',
        component: WebComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'specialists',
                component: SpecialistsComponent
            },
            {
                path: 'select-specialist',
                component: SelectSpecialistComponent
            },
            {
                path: 'select-specialist-second',
                component: SelectSpecialistSecondComponent,
                resolve: {
                    data: GetAllCleaningResolve
                }
            },
            {
                path: 'sort', component: SortComponent
            },
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'register/:type', component: RegisterComponent
            },
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    { path: '', redirectTo: 'personal-room', pathMatch: 'full' },
                    {
                        path: 'personal-room',
                        component: PersonalRoomClientComponent,
                        canActivate: [RoleGuard]
                    },
                    {
                        path: 'personal-room-client',
                        component: PersonalRoomClientComponent,
                        resolve: {
                            data: GetMyCleaningsResolve
                        }
                    },
                    {
                        path: 'personal-room-cleaner',
                        component: PersonalRoomCleanerComponent,
                        resolve: {
                            data: GetMyCleaningResolve
                        }
                    },
                    {
                        path: 'my-cleaners',
                        component: MyCleanersComponent,
                        resolve: {
                            data: GetMyCleaningResolve
                        }
                    },
                    {
                        path: 'my-cleaning',
                        component: MyCleaningComponent,
                        resolve: {
                            data: GetMyCleaningsResolve
                        }
                    },
                    {
                        path: 'my-clients',
                        component: MyClientComponent,
                        resolve: {
                            data: GetMyCleaningsResolve
                        }
                    }
                ]
            }

        ]
    }
];


export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(WEB_ROUTING);


