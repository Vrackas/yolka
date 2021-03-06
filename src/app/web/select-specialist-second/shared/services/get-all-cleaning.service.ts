import { Injectable } from "@angular/core";
import { EntityService } from "../../../../shared/base/entity.service";
import { RequestService } from "../../../../shared/services/request.service";
import { tap } from "rxjs/operators";

@Injectable()
export class GetAllCleaningService extends EntityService {

    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'incognito';
    }

    getAllCleaning() {
        let url = this.url('all');
        return this.request.get(url);
    }

    createCleaner(data: any) {
        let url = this.url('create');
        return this.request.post(url, data)
            .pipe(tap(() => {
                const msg = this.msg('create');
                this.notification('success', msg);
            }));
    }
}