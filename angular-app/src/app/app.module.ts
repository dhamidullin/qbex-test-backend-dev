import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { BasketComponent } from './components/basket/basket.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { EditorComponent } from './components/editor/editor.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserEditorComponent } from './components/user-editor/user-editor.component';
import { UsersListComponent } from './components/users-list/users-list.component';

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
    path: 'products',
    children: [
      {
        path: '',
        component: CatalogComponent
      },
      {
        path: ':link',
        component: ProductComponent
      },
    ]
  },
  {
    path: 'admin', canActivate: [OnlyAdminGuard], children: [
      {
        path: '', component: AdminComponent
      },
      {
        path: 'editProduct/:link', component: EditorComponent
      },
      {
        path: 'addProduct', component: EditorComponent
      },
      {
        path: 'users', children: [
          {
            path: '', component: UsersListComponent
          },
          {
            path: 'addUser', component: UserEditorComponent
          },
          {
            path: 'edit/:id', component: UserEditorComponent
          }
        ]
      }
    ]
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
    EditorComponent,
    UserEditorComponent,
    UsersListComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    EditorModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [OnlyAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }