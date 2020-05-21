import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/models";
import { LocalService } from "../../shared/services/local.service";
import { environment } from "../../../environments/environment";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product;
  iconPath = environment.assetsPath + "/Icons/";
  modalStatus = false;
  category = "";
  constructor(
    private local: LocalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.category = data["params"]["categoryName"];
    });
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.local.getAllProducts().subscribe((data) => {
      if (data.success) {
        this.products = data.result;
        this.products = this.products.filter(
          (val, i) => val.category === this.category
        );
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
}
