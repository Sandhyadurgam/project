import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from 'src/environments/environment.development';
import { AuthService } from './services/auth.service';
import { ProductComponent } from './components/admin/product/product.component';
import { AdminOrdersComponent } from './components/admin/orders/admin-orders.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsComponent } from './components/products/products.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';
import { AuthGuard } from './guards.ts/auth.guard';
import { AdminGuard } from './guards.ts/admin.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'order-success/:id', component: OrderSuccessComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'admin/categories', component: CategoryComponent },
  { path: 'admin/products', component: ProductComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'un-authorized', component: UnAuthorizedComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    CategoryComponent,
    NavBarComponent,
    ProductComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    OrderDetailComponent,
    CheckOutComponent,
    AdminOrdersComponent,
    UnAuthorizedComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, CategoryService, ProductService, ShoppingCartService, OrderService, AdminGuard, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
