import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { GetMyCleaningService } from "../services/get-my-cleaning.service";

@Injectable()
export class GetMyCleaningResolve implements Resolve<any> {

    constructor(public service: GetMyCleaningService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getMyCleaning();
    }
}