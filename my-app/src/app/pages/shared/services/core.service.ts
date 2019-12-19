import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseResult } from '@shared/models/response.model';
import { StorageManager } from '@shared/utils/storage';

// 加上@Injectable()用于该服务被其他组件/服务注入
@Injectable()
export class CoreService {

    num: any;
    SysProject: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) {
    }
    request(url: string, params = null): Observable<ApiResponseResult> {
        if (url.startsWith('/')) {
            url = 'http://localhost:8080' + url;
        }
        return this.http.post<ApiResponseResult>(`${url}`, params);
    }

    get url(){
        return window.location.pathname;
    }

    get UserMes(){
        return StorageManager.get('loginUserMes');
    }
    set(num){
        this.num = num;
    }
    get(){
        return this.num;
    }
}