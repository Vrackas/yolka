import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { EntityService } from "../../../../shared/base/entity.service";
import { RequestService } from "../../../../shared/services/request.service";

@Injectable()
export class AuthSecondService extends EntityService {

    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'user';
    }

    login(data) {
        let url = this.url('login');
        return this.request.post(url, data);
    }

    register(data) {
        let url = this.url('register');
        return this.request.post(url, data)
            .pipe(tap(() => {
                const msg = this.msg('register');
                this.notification('success', msg);
            }));
    }

}