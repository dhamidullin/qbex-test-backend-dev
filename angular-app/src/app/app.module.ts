import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { BasketComponent } from './components/basket/basket.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

/**
 * home
 * catalog
 * товара item
 * 
 * admin
 * админ панель / добавить товар
 * 
 * sign-in
 * sign-up
 * 
 * 404
 */


import { OnlyAdminGuard } from './guards/only-admin.guard';

import { EditorModule } from '@tinymce/tinymce-angular';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'catalog/:link',
    component: ProductComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    canActivate: [OnlyAdminGuard],
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CatalogComponent,
    ProductComponent,
    AdminComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    EditorModule
  ],
  providers: [OnlyAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



