import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductPreviewComponent } from "../../../products/product-preview/product-preview.component";

@NgModule({
  declarations: [ProductPreviewComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [ProductPreviewComponent],
})
export class SharedModule {}
