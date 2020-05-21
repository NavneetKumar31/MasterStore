import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartHomeComponent } from "./cart-home/cart-home.component";
import { CartItemsComponent } from "./cart-items/cart-items.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CartRoutingModule } from "./cart-routing.module";
import { CartInfoComponent } from "./cart-info/cart-info.component";
import { SharedModule } from "../shared/modules/shared/shared.module";
import { MaterialModule } from "../shared/modules/material-module";

@NgModule({
  declarations: [
    CartHomeComponent,
    CartItemsComponent,
    CartSummaryComponent,
    CartInfoComponent,
  ],
  imports: [CommonModule, CartRoutingModule, SharedModule, MaterialModule],
})
export class CartModule {}
