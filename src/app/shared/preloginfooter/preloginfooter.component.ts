import { Component } from '@angular/core';

declare var $:any;


@Component({
    selector: 'preloginfooter-cmp',
    templateUrl: 'preloginfooter.component.html'
})

export class PreloginFooterComponent{
    test : Date = new Date();
    footerval : Boolean = true;
}