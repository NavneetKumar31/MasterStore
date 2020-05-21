import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "products/:categoryName",
    loadChildren: () =>
      import(`./products/products.module`).then((m) => m.ProductsModule),
  },
  {
    path: "cart",
    loadChildren: () => import(`./cart/cart.module`).then((m) => m.CartModule),
  },
  {
    path: "orders",
    loadChildren: () =>
      import(`./orders/orders.module`).then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
