import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/themes/theme.service';
import { THEMES } from 'src/app/shared/constants/themes.constant';
import { Router, NavigationEnd } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/data-providers/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  FILE_NAME = 'header.component.ts';

  THEMES = THEMES;
  onProductsPage = false;

  /**
   * Subscribes to route change events to decide whether to display search box or not
   */
  constructor(
    private router: Router,
    private themeService: ThemeService,
    private productService: ProductsService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onProductsPage = event.urlAfterRedirects === '/products';
      }
    });
  }

  ngOnInit() { }

  /**
   * Navigates to product details page to add a new product
   */
  addNewProduct() {
    console.log(`${this.FILE_NAME}: Redirecting to product details page to add new product`);
    this.router.navigate(['products/add']);
  }

  /**
   * Notifies theme service to change the applied theme
   */
  onSetTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  /**
   * Forwards product search request to product service
   */
  searchProduct(event) {
    this.productService.searchProduct(event.target.value);
  }
}
