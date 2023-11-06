# MyStore

This project was generated with Angular CLI. The My Store project was designed to be very clean and clear for the end user. I created a product list where the user can select add an item directly to cart or when you click on the item it shows a more detailed view, simply add or change the amount of items in both of these accounts and add this to the cart page. From the cart page you can add items as well as remove items and check them out if you are happy. The page Total will update automatically. Once you check out you receive a window showing that your order has been received and proccessed.

I created the following components:

1. product-list
2. product-item-detail
3. cart
4. create-form
5. confirmation
6. nav-bar
7. footer

I Did not use the global CSS style sheet, but instead customised all the components within their own CSS file.

I used the following app-routes for navigation:

  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-item-detail/:id', component: ProductItemDetailComponent },
  { path: 'confirmation', component: ConfirmationComponent}

These are the modules I used:

@NgModule
  declarations: 
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    NavBarComponent,
    AppComponent,
    FooterComponent,
    CartComponent,
    CreateFormComponent

These are the imports I used:

  imports: 
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule

The HttpClientModule was used to pull in the "data.json" file from the assets folder.
The Bootstrap element was used to make the website look a little bit modern with built in styles.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# MyStore
