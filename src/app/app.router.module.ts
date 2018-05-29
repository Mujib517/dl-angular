import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";


const ROUTES = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailComponent },
{ path: '**', component: NotFoundComponent }
]

@NgModule({
   imports:[RouterModule.forRoot(ROUTES)]
})
export class AppRouterModule{}