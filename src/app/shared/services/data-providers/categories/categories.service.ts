import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/shared/classes/category.class';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  /** Holds the list of categories available */
  categories$: BehaviorSubject<Array<Category>>;

  constructor() {
    this.categories$ = new BehaviorSubject(this.getDefaultCategories());
  }

  /**
   * Returns defaults category list
   */
  getDefaultCategories(): Array<Category> {
    return [
      new Category({ id: 1, name: 'Home appliances' }),
      new Category({ id: 2, name: 'Mobile phones' }),
      new Category({ id: 3, name: 'Laptops' }),
    ];
  }
}
