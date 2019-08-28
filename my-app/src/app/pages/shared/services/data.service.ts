import { Injectable } from '@angular/core';
import { CoreService } from '@shared/services/core.service';
import { Observable } from 'rxjs';
import { ApiResponseResult } from '@shared/models/response.model';
import { ApiRequestParams } from '@shared/models/request.model';

@Injectable()
export class DataService {

    constructor(private core: CoreService) {
    }

    getList(url, params): Observable<ApiResponseResult>{
        return this.core.request(url, new ApiRequestParams(2, params));
    }

    getPageList(url, params, page): Observable<ApiResponseResult>{
        return this.core.request(url, new ApiRequestParams(2, params, page));
    }
};