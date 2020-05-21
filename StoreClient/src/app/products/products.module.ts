import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { RecommendedProductsComponent } from "./recommended-products/recommended-products.component";
import { ProductReviewsComponent } from "./product-reviews/product-reviews.component";
import { SharedModule } from "../shared/modules/shared/shared.module";
import { MaterialModule } from "../shared/modules/material-module";
import { ProductsRoutingModule } from "./products-routing.module";
// import { ProductPreviewComponent } from './product-preview/product-preview.component';

@NgModule({
  declarations: [
    ProductsHomeComponent,
    ProductFilterComponent,
    ProductListComponent,
    ProductDetailComponent,
    RecommendedProductsComponent,
    ProductReviewsComponent,
    // ProductPreviewComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, ProductsRoutingModule],
})
export class ProductsModule {}
