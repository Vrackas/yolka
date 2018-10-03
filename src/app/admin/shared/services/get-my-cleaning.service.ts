import { Injectable } from "@angular/core";
import { EntityService } from "../../../shared/base/entity.service";
import { RequestService } from "../../../shared/services/request.service";

@Injectable()
export class GetMyCleaningService extends EntityService {

    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'client';
    }

    getMyCleaning() {
        let url = this.url('all');
        return this.request.get(url);
    }

    getMyCleanings() {
        let url = this.url('my');
        return this.request.get(url);
    }
}