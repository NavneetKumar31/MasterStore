import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsHomeComponent,
    children: [
      { path: "", component: ProductListComponent },
      { path: "product-details/:productId", component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
