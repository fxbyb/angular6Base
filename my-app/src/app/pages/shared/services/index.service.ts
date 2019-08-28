import { Injectable } from '@angular/core';
import { CoreService } from '@shared/services/core.service';
import { DataService } from '@shared/services/data.service';
import { Observable } from 'rxjs';
import { ApiResponseResult } from '@shared/models/response.model';

@Injectable()
export class IndexService {
    constructor(
        private core: CoreService,
        private dataService: DataService
    ) {}
    getIndexList(params): Observable<ApiResponseResult>{
        return this.dataService.getList('/api/list', params);
    }
};