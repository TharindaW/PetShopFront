import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
    { path: '', redirectTo: '/shop' , pathMatch: 'full' } ,
    { path: 'checkout', component: CheckoutComponent } ,
    { path: 'shop', component: StoreComponent }
];


@NgModule(
    {
        imports: [ RouterModule.forRoot( routes )],
        exports: [ RouterModule ]
    }
)
export class AppRoutingModule {

}