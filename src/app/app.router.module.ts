import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule, Route } from "@angular/router";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SpecsComponent } from "./specs/specs.component";
import { ProductResolver } from "./shared/product.resolver";
import { LazyComponent } from "./lazy/lazy.component";
import { NewProductComponent } from "./new-product/new-product.component";

const PRODUCT_ROUTES: Route[] = [{ path: 'reviews', component: ReviewsComponent },
{ path: 'specs', component: SpecsComponent },
{ path: '', redirectTo: 'reviews', pathMatch: 'full' }];

const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductListComponent, resolve: { products: ProductResolver } },
{ path: 'products/new', component: NewProductComponent },
{ path: 'products/:id', component: ProductDetailComponent, children: PRODUCT_ROUTES },
{ path: 'lazy', component: LazyComponent, loadChildren: './lazy/lazy.module#LazyModule' },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouterModule { }