import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/data-providers/products/products.service';
import { Product } from 'src/app/shared/classes/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/services/data-providers/categories/categories.service';
import { Category } from 'src/app/shared/classes/category.class';
import { BehaviorSubject } from 'rxjs';
import { IMAGE_BASE_PATH } from 'src/app/shared/constants/images.constant';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {

    FILE_NAME = 'product-details.component.ts';

    product: Product;
    categories$: BehaviorSubject<Array<Category>>;
    updateForm: FormGroup;

    /**
     * Getter method for FormBuilder controls
     */
    get updateFormControls() {
        return this.updateForm.controls;
    }

    constructor(
        categoryService: CategoriesService,
        private productsService: ProductsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
    ) {
        this.categories$ = categoryService.categories$;

        this.product = new Product({
            id: -1,
            name: '',
            image: IMAGE_BASE_PATH + 'Default_image.jpg',
            price: 0,
            currency: 'USD',
            categories: 1
        });
        this.updateForm = this.formBuilder.group({
            productname: [this.product.name, Validators.required],
            productprice: [this.product.price, Validators.min(1)],
            productcategory: [this.product.categories, Validators.required]
        });
    }

    /**
     * Fetches the product id from URL, and creates FormBuilder object
     * If project id is 'add', will create a new product
     */
    ngOnInit() {

        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id !== 'add') {

            let productId = -1;
            try {
                productId = Number.parseInt(
                    this.activatedRoute.snapshot.paramMap.get('id'),
                    10
                );
            } catch (ex) {
                console.log(`${this.FILE_NAME}: Invalid product id`);
            }

            const product = this.productsService.getProductById(productId);
            if (product) {
                this.product = product;
                this.updateForm = this.formBuilder.group({
                    productname: [product.name, Validators.required],
                    productprice: [product.price, Validators.required],
                    productcategory: [product.categories, Validators.required]
                });
            } else {
                console.log(`${this.FILE_NAME}: Cannot find product to update`);
                this.router.navigate(['products']);
            }
        }
    }

    /**
     * Submits the updated values to productService to save
     */
    updateProduct() {
        if (this.updateForm.valid) {
            this.product.name = this.updateForm.controls.productname.value;
            this.product.price = this.updateForm.controls.productprice.value;
            this.product.categories = Number.parseInt(this.updateForm.controls.productcategory.value, 10);
            console.log(`${this.FILE_NAME}: Product details: `, this.product);
            this.productsService.updateProductDetails(this.product);
            this.router.navigate(['products']);
        }
    }

    /**
     * On back button click, navigates to products page
     */
    backtoProducts() {
        console.log(`${this.FILE_NAME}: Redirecting to products page: `);
        this.router.navigate(['products']);
    }
}
