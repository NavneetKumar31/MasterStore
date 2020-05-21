import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderHomeComponent } from "./order-home/order-home.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { PreviousOrdersComponent } from "./previous-orders/previous-orders.component";
import { DeliveryAddressComponent } from "./delivery-address/delivery-address.component";
import { ShippingAddressComponent } from "./shipping-address/shipping-address.component";
import { SharedModule } from "../shared/modules/shared/shared.module";
import { MaterialModule } from "../shared/modules/material-module";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { OrderInfoComponent } from './order-info/order-info.component';

@NgModule({
  declarations: [
    OrderHomeComponent,
    OrderSummaryComponent,
    CreateOrderComponent,
    PreviousOrdersComponent,
    DeliveryAddressComponent,
    ShippingAddressComponent,
    OrderedItemsComponent,
    OrderInfoComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, OrderRoutingModule],
})
export class OrdersModule {}
