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


const ROUTES = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductListComponent },
{ path: '**', component: NotFoundComponent }
//{ path: '**', redirectTo: '' }];


//ES6 Module, Angular Module
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule,
        RouterModule.forRoot(ROUTES)],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ProductListComponent, ProductComponent, UserListComponent, HeaderComponent, FooterComponent, ContactComponent, NotFoundComponent],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}