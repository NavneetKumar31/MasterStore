import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../shared/models/models";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-product-preview",
  templateUrl: "./product-preview.component.html",
  styleUrls: ["./product-preview.component.scss"],
})
export class ProductPreviewComponent implements OnInit {
  @Input() product: Product;
  iconPath = environment.assetsPath + "/Icons/";
  constructor() {}

  ngOnInit() {}
}
