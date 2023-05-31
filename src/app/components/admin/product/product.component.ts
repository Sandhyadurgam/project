import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  presentPage: number = 1;
  products: Product[] = [];
  categories: Category[] = [];
  modalHeader: string = '';
  showLoader: boolean = false;
  searchTerm: string;
  product = new Product();

  productForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
  });


  constructor(private _productService: ProductService, private toastr: ToastrService, private _categoryService: CategoryService) { }

  addProduct() {
    this.modalHeader = 'Add Product';
    this.product = new Product();
    this.productForm.reset();
  }
  editProduct(_product: Product) {
    this.modalHeader = 'Edit Product';
    this.product = _product;
  }
  deleteProduct(id: any) {
    this._productService.delete(id)
      .then((response) => {
        this.toastr.success('Product deleted successfully...!');
      })
      .catch((error: Response) => {
        this.toastr.error('Un-handled exception occured..!');
      });
  }

  saveProduct() {
    if (this.product.id) {
      this._productService.update(this.product.id, this.product)
        .then((response) => {
          this.toastr.success('Product updated successfully...!');
        })
        .catch((error: Response) => {
          this.toastr.error('Un-handled exception occured..!');
        });
    }
    else {
      this._productService.create(this.product)
        .then((response) => {
          this.toastr.success('Product added successfully...!');
        })
        .catch((error: any) => {
          this.toastr.error('Un-handled exception occured..!');
        });
    }
    this.product = new Product();
    this.productForm.reset();
  }
  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
  loadProducts() {
    this.showLoader = true;
    this._productService.read(this.searchTerm)
      .subscribe(response => {
        this.products = response.map((data) => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data() as Product
          }
        });
        this.showLoader = false;
      })
  }
  loadCategories() {
    this._categoryService.read()
      .subscribe((response: any[]) => {
        this.categories = response.map((data) => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data() as Category
          }
        });
      })
  }
  filterData() {
    this.loadProducts();
  }
}
