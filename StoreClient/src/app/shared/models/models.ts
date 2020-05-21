export interface Category {
  name?: string;
  createdOn?: Date;
  updatedOn?: Date;
  createdBy?: string;
}

export interface Product {
  name?: string;
  brandName?: string;
  details?: string;
  category?: string;
  sellingPrice?: number;
  mrp?: number;
  tags?: string;
  features?: string[];
  discount?: number;
  image?: string;
  buyingPrice?: number;
}
