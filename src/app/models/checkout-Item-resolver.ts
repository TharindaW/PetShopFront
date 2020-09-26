import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CheckoutDataService } from './../services/checkout-data.service';
import { CartItem } from './cart-item';

@Injectable()
export class CheckoutItemResolver implements Resolve<CartItem[]> {


    constructor(private dataService: CheckoutDataService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CartItem[]> {

        return null;
    }

}