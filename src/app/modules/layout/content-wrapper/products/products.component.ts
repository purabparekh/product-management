import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/shared/classes/category.class';
import { Product } from 'src/app/shared/classes/product.class';
import { CategoriesService } from 'src/app/shared/services/data-providers/categories/categories.service';
import { ProductsService } from 'src/app/shared/services/data-providers/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories$: BehaviorSubject<Array<Category>>;
  products$: BehaviorSubject<Array<Product>>;

  constructor(
    categoriesService: CategoriesService,
    public productsService: ProductsService
  ) {
    this.categories$ = categoriesService.categories$;
    this.products$ = productsService.products$;
  }

  ngOnInit() { }

  /**
   * Notifies product service to delete particular product
   */
  deleteProduct(productToDelete) {
    this.productsService.deleteProduct(productToDelete.id);
  }
}
