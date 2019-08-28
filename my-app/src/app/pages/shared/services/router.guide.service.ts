import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CoreService } from './core.service';

@Injectable()
export class RouterGuideService implements CanActivate {

    routerEventsListener: any;
    constructor(
        private router: Router,
        private core: CoreService
    ) {
        // 监听路由变化
        this.router.events
        .pipe(filter(evt => evt instanceof NavigationEnd))
        .subscribe((ev) => {
            console.log(ev);
        });
    }
    // canActivate用于控制路由，返回true则路由正常跳转， false则路由不跳转
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(!this.core.UserMes || !this.core.UserMes.userId){
            this.router.navigate(['/login']);
            return false;
        }
        return  true;
    }
}