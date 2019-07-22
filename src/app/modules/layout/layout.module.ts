import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './content-wrapper/products/products.component';
import { ProductDetailsComponent } from './content-wrapper/product-details/product-details.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper/content-wrapper.component';

import { layoutRoutes } from './layout.routes';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    LayoutComponent,
    HeaderComponent,
    ContentWrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(layoutRoutes),
  ]
})
export class LayoutModule { }
