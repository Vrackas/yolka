import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor() {
        // console.log('home Component is loaded');
    }

    private element: any;

    headerWrapperOpen() {
        this.element = document.getElementsByClassName('header_site_wrapper')[0];
        this.element.classList.add('active');
    }

    headerWrapperClose(){
        this.element = document.getElementsByClassName('header_site_wrapper')[0];
        this.element.classList.remove('active');
    }

    @HostListener('window:mouseup', ['$event'])
    mouseUp(event) {
        // this.element = document.getElementsByClassName('header_site_wrapper');
        // this.element.classList.remove('active');
    }
}
