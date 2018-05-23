import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from './product/product.component';
import { SharedModule } from "./shared/shared.module";

//ES6 Module, Angular Module
@NgModule({
    imports: [BrowserModule,FormsModule,SharedModule],
    declarations: [AppComponent, HomeComponent, 
        AboutComponent,ProductListComponent, ProductComponent],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}