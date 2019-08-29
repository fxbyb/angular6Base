import { Component, OnInit } from "@angular/core";
import { CoreService } from '@shared/services/core.service';

@Component({
    selector: 'app-base',
    template: '<span></span>'
})
// tslint:disable-next-line:component-class-suffix
export class AppBase implements OnInit{
    constructor(
        protected coreService: CoreService
    ){}
    ngOnInit(){
        console.log('appbase');
    }
    get userId(){
        return '123';
    }
}