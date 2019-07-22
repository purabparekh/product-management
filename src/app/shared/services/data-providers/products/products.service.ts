import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, IProduct } from 'src/app/shared/classes/product.class';
import { IMAGE_BASE_PATH } from 'src/app/shared/constants/images.constant';

@Injectable({
    providedIn: 'root'
})
/**
 * Handles CRUD operations for products
 */
export class ProductsService {

    FILE_NAME = 'products.service.ts';

    /** Holds the list of all products */
    allProducts: Array<Product>;

    /** Holds the list of products that matches search criteria */
    products$: BehaviorSubject<Array<Product>>;
    searchText: string;

    constructor() {
        this.allProducts = this.getDefaultProducts();
        this.products$ = new BehaviorSubject(this.allProducts);
        this.searchText = '';
    }

    /**
     * Returns the default products list
     */
    getDefaultProducts(): Array<Product> {
        return [
            new Product({
                id: 1,
                name: 'Fridge',
                image: IMAGE_BASE_PATH + 'Fridge.jpg',
                price: 100,
                currency: 'USD',
                categories: 1
            }),
            new Product({
                id: 2,
                name: 'Microwave',
                image: IMAGE_BASE_PATH + 'Microwave.jpg',
                price: 80,
                currency: 'USD',
                categories: 1
            }),
            new Product({
                id: 3,
                name: 'Air conditioners',
                image: IMAGE_BASE_PATH + 'AC.jpg',
                price: 140,
                currency: 'USD',
                categories: 1
            }),
            new Product({
                id: 4,
                name: 'Televisions',
                image: IMAGE_BASE_PATH + 'TV.jpg',
                price: 230,
                currency: 'USD',
                categories: 1
            }),

            new Product({
                id: 5,
                name: 'iPhone X',
                image: IMAGE_BASE_PATH + 'Iphone-X.jpg',
                price: 960,
                currency: 'USD',
                categories: 2
            }),
            new Product({
                id: 6,
                name: 'Sony Xperia',
                image: IMAGE_BASE_PATH + 'Sony-Xperia.jpg',
                price: 360,
                currency: 'USD',
                categories: 2
            }),
            new Product({
                id: 7,
                name: 'One plus 7 pro',
                image: IMAGE_BASE_PATH + 'One-plus-7-pro.jpg',
                price: 480,
                currency: 'USD',
                categories: 2
            }),

            new Product({
                id: 8,
                name: 'Macbook',
                image: IMAGE_BASE_PATH + 'Macbook.jpg',
                price: 1057,
                currency: 'USD',
                categories: 3
            }),
            new Product({
                id: 9,
                name: 'Thinkpad',
                image: IMAGE_BASE_PATH + 'Thinkpad.jpg',
                price: 954,
                currency: 'USD',
                categories: 3
            }),
        ];
    }

    /**
     * Returns the products filtered by category
     */
    getProductsByCategory(categoryId: number): BehaviorSubject<Array<Product>> {
        const productsInCategory$ = new BehaviorSubject(
            this.products$.value.filter((product: Product) => product.categories === categoryId));
        return productsInCategory$;
    }

    /**
     * Adds a new product
     */
    addNewProduct(product: IProduct) {
        this.allProducts.push(product);
        this.products$.next(this.allProducts);
        console.log(`${this.FILE_NAME}: New product added`, product);
    }

    /**
     * Based on product id, either updates existing or adds a new product
     */
    updateProductDetails(updatedProduct: Product) {
        if (updatedProduct.id === -1) {
            updatedProduct.id = this.allProducts.length + 1;
            this.addNewProduct(updatedProduct);
        } else {
            const productIndex = this.allProducts.findIndex(product => product.id === updatedProduct.id);
            if (productIndex >= 0) {
                const productToUpdate = this.allProducts[productIndex];
                const newProduct = new Product(Object.assign({}, productToUpdate, updatedProduct));
                this.allProducts.splice(productIndex, 1, newProduct);
                this.products$.next(this.allProducts);
                console.log(`${this.FILE_NAME}: Product details updated`, updatedProduct);
            }
        }
    }

    /**
     * Deletes a product having particular id
     */
    deleteProduct(productId: number) {
        const productIndex = this.allProducts.findIndex(product => product.id === productId);
        if (productIndex >= 0) {
            const product = this.allProducts.splice(productIndex, 1);
            this.products$.next(this.allProducts);
            console.log(`${this.FILE_NAME}: Product deleted`, product);
        }
    }

    /**
     * Returns a product having particular id
     */
    getProductById(productId: number): Product {
        return this.allProducts.find(product => product.id === productId);
    }

    /**
     * Searches for a product in allProducts list
     */
    searchProduct(searchText: string) {
        this.searchText = searchText;
        console.log(`${this.FILE_NAME}: Searching for products, searchText: `, searchText);
        searchText = searchText.toLowerCase();
        let products: Array<Product>;
        if (searchText.trim() === '') {
            products = this.allProducts;
        } else {
            products = this.allProducts.filter(product => product.name.toLowerCase().includes(searchText));
            console.log(`${this.FILE_NAME}: Number of products matched: `, products.length);
        }
        this.products$.next(products);
    }
}
