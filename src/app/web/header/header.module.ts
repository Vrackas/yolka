import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent
    ],
    providers: [

    ]
})
export class HeaderModule {
    constructor() {
        // console.log('Home module is loaded');
    }
}
