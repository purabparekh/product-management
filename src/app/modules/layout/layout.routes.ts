import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './content-wrapper/products/products.component';
import { ProductDetailsComponent } from './content-wrapper/product-details/product-details.component';

export const layoutRoutes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: 'products', component: ProductsComponent,
            },
            {
                path: 'products/:id', component: ProductDetailsComponent,
            },
            {
                path: '', redirectTo: 'products'
            },
        ]
    },
];
