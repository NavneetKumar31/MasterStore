import { Component, OnInit, ViewChild } from "@angular/core";
import { LocalService } from "../../shared/services/local.service";
import { Product } from "../../shared/models/models";
import { environment } from "../../../environments/environment";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.scss"],
})
export class CartItemsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product;
  iconPath = environment.assetsPath + "/Icons/";
  modalStatus = false;

  displayedColumns: string[] = [
    "name",
    "price per unit",
    "quantity",
    "total amount",
    "actions",
  ];
  dataSource: MatTableDataSource<Product>;
  constructor(private local: LocalService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.local.getAllProducts().subscribe((data) => {
      if (data.success) {
        this.products = data.result.slice(0, 6);
        this.products.forEach((product) => {
          product.sellingPrice =
            product.mrp - (product.mrp * product.discount) / 100;
        });
        this.dataSource = new MatTableDataSource(this.products);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  previewProduct(product: Product): void {
    this.selectedProduct = product;
    this.toggleModal();
  }

  toggleModal(): void {
    this.modalStatus = !this.modalStatus;
  }
}
