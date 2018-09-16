import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';


const WEB_ROUTING: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // children: [
        //     {path: '', redirectTo: 'home', pathMatch: 'full'},
        //     {
        //         path: 'home',
        //         component: HomeComponent
        //     }
        //
        // ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WEB_ROUTING)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})


export class WebRoutingModule {
    constructor() {
        console.log('web routing is loaded');
    }
}
