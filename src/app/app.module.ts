import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from './product/product.component';
import { SharedModule } from "./shared/shared.module";
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SpecsComponent } from './specs/specs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppRouterModule } from "./app.router.module";
import { LazyComponent } from "./lazy/lazy.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

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