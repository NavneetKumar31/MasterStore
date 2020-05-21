import { Component, OnInit } from "@angular/core";
import { LocalService } from "../shared/services/local.service";
import { Category, Product } from "../shared/models/models";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedProduct: Product;
  iconPath = environment.assetsPath + "/Icons/";
  modalStatus = false;

  constructor(private local: LocalService, private router: Router) {}

  ngOnInit() {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories(): void {
    this.local.getAllCategories().subscribe((data) => {
      if (data.success) {
        this.categories = data.result;
      }
    });
  }

  getAllProducts(): void {
    this.local.getAllProducts().subscribe((data) => {
      if (data.success) {
        this.products = data.result;
        this.products.forEach((product) => {
          product.sellingPrice =
            product.mrp - (product.mrp * product.discount) / 100;
        });
      }
    });
  }

  previewProduct(product: Product): void {
    this.selectedProduct = product;
    this.toggleModal();
  }

  toggleModal(): void {
    this.modalStatus = !this.modalStatus;
  }

  routeTo(path: string): void {
    this.router.navigate([path]);
  }

  childRouteTo(parent: string, child: string): void {
    this.router.navigate([parent.toLowerCase(), child.toLowerCase()]);
  }
}
