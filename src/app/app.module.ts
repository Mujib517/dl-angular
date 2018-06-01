import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./app.router.module";

import {
    AppComponent, HomeComponent,
    AboutComponent, ProductListComponent,
    ProductComponent, HeaderComponent,
    FooterComponent, ContactComponent, NotFoundComponent,
    ProductDetailComponent, SpecsComponent, ReviewsComponent, LazyComponent,
    NewProductComponent, ReactiveFormComponent
} from './app.barrel';

//ES6 Module, Angular Module
@NgModule({
    imports: [BrowserModule, SharedModule, AppRouterModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ProductListComponent,
        ProductComponent, HeaderComponent,
        FooterComponent, ContactComponent, NotFoundComponent,
        ProductDetailComponent, SpecsComponent, ReviewsComponent, LazyComponent,
        NewProductComponent, ReactiveFormComponent],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}