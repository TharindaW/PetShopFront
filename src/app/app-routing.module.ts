import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StoreComponent } from './components/store/store.component';
import { HelpComponent } from './help/help.component';
import {CheckoutItemResolver } from './models/checkout-Item-resolver';

const routes: Routes = [
    { path: '', redirectTo: '/shop' , pathMatch: 'full' } ,
    { path: 'checkout', component: CheckoutComponent  } , // , resolve: { cartItems: CheckoutItemResolver }
    { path: 'shop', component: StoreComponent },
    { path: 'help', component: HelpComponent }

];


@NgModule(
    {
        imports: [ RouterModule.forRoot( routes )],
        exports: [ RouterModule ]
    }
)
export class AppRoutingModule {

}