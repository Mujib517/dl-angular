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

const PRODUCT_ROUTES: Route[] = [{ path: 'reviews', component: ReviewsComponent },
{ path: 'specs', component: SpecsComponent }];

const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailComponent, children: PRODUCT_ROUTES },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouterModule { }