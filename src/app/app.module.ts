import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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



//{ path: '**', redirectTo: '' }];


//ES6 Module, Angular Module
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule,AppRouterModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ProductListComponent, ProductComponent, UserListComponent, HeaderComponent, FooterComponent, ContactComponent, NotFoundComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}