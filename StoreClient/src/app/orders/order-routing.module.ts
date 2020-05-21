import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderHomeComponent } from "./order-home/order-home.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { PreviousOrdersComponent } from "./previous-orders/previous-orders.component";

const routes: Routes = [
  {
    path: "",
    component: OrderHomeComponent,
    children: [
      { path: "create-order", component: CreateOrderComponent },
      { path: "order-summary", component: OrderSummaryComponent },
      { path: "previous-orders", component: PreviousOrdersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
