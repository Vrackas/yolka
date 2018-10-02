import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { GetAllCleaningService } from "../services/get-all-cleaning.service";

@Injectable()
export class GetAllCleaningResolve implements Resolve<any> {

    constructor(public service: GetAllCleaningService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getAllCleaning();
    }
}