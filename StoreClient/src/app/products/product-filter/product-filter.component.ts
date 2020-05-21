import { Component, OnInit } from "@angular/core";
import { Category } from "../../shared/models/models";
import { LocalService } from "../../shared/services/local.service";

@Component({
  selector: "app-product-filter",
  templateUrl: "./product-filter.component.html",
  styleUrls: ["./product-filter.component.scss"],
})
export class ProductFilterComponent implements OnInit {
  categories: Category[] = [];
  constructor(private local: LocalService) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.local.getAllCategories().subscribe((data) => {
      if (data.success) {
        this.categories = data.result;
      }
    });
  }
}
