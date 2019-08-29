import { Component, OnInit } from "@angular/core";
import { CoreService } from '@shared/services/core.service';
import { AppBase } from './app-base';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-base',
    template: '<span></span>'
})
// tslint:disable-next-line:component-class-suffix
export class ProjectBase extends AppBase implements OnInit{
    constructor(
        protected routerInfo: ActivatedRoute,
        protected coreService: CoreService
    ){
        super(coreService);
    }
    ngOnInit(){
        console.log(this.userId);
    }
    get ProjectId(){
        return '324';
    }
}