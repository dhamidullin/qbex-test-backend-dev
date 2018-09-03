(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"'/'\">{{title}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"'/products'\">Каталог</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"\" (click)=\"dataService.showBasket = true\">Корзина</a>\r\n      </li>\r\n      <li *ngIf=\"dataService.isAdmin\" class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"'/admin'\">Админ-меню</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"'/about'\">О нас</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- <form class=\"form-inline my-2 my-lg-0\" style=\"margin-right: 10px\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form> -->\r\n\r\n    <!-- <button class=\"btn btn-outline-secondary\">\r\n      Здравствуйте,\r\n      <u>войдите в личный кабинет.</u>\r\n    </button> -->\r\n\r\n    <div *ngIf=\"dataService.username == null\" class=\"text-white\">\r\n      Здравствуйте,\r\n      <a [routerLink]=\"'sign-in'\">войдите в личный кабинет</a>\r\n    </div>\r\n\r\n    <div *ngIf=\"dataService.username != null\" class=\"dropdown\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [ngClass]=\"{'btn-outline-danger': dataService.isAdmin}\"\r\n        data-toggle=\"dropdown\">\r\n        Здравствуйте,\r\n        <span *ngIf=\"dataService.isAdmin\">Админ</span> {{dataService.username}}\r\n      </button>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logout()\">Выход</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-basket *ngIf=\"dataService.showBasket\"></app-basket>\r\n\r\n<!-- <editor [(ngModel)]=\"data\" [init]=\"{plugins: 'link lists'}\" apiKey=\"vm3fozlgp04ukynxiispecc43xjwkph2xvlkhl2d15c1o5s1\"></editor>\r\n\r\n<button class=\"btn btn-access\" (click)=\"func()\">button</button> -->\r\n\r\n<!-- [ngStyle]=\"[display: block] : dataService.showBasket; [display: none] : !dataService.showBasket\" -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(httpService, router, dataService) {
        this.httpService = httpService;
        this.router = router;
        this.dataService = dataService;
        this.helloText = 'text privet';
        this.title = 'qbex';
        this.displayBasket = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.dataService.reloadUser();
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.httpService.logout().subscribe(function (data) {
            if (data.json().err == false) {
                alert('вышел');
                _this.dataService.reloadUser();
                _this.router.navigate(['/']);
                setTimeout(function () {
                    _this.dataService.reloadUser();
                }, 300);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-list/order-list.component */ "./src/app/components/order-list/order-list.component.ts");
/* harmony import */ var _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/catalog/catalog.component */ "./src/app/components/catalog/catalog.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/components/basket/basket.component.ts");
/* harmony import */ var _components_user_editor_user_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-editor/user-editor.component */ "./src/app/components/user-editor/user-editor.component.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/components/users-list/users-list.component.ts");
/* harmony import */ var _components_display_username_by_id_display_username_by_id_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/display-username-by-id/display-username-by-id.component */ "./src/app/components/display-username-by-id/display-username-by-id.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_order_display_product_by_id_display_product_by_id_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/order/display-product-by-id/display-product-by-id.component */ "./src/app/components/order/display-product-by-id/display-product-by-id.component.ts");
/* harmony import */ var _guards_only_admin_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/only-admin.guard */ "./src/app/guards/only-admin.guard.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























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


var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__["CatalogComponent"]
            },
            {
                path: ':link',
                component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_16__["ProductComponent"]
            },
        ]
    },
    {
        path: 'admin', canActivate: [_guards_only_admin_guard__WEBPACK_IMPORTED_MODULE_23__["OnlyAdminGuard"]], children: [
            {
                path: '', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"]
            },
            {
                path: 'editProduct/:link', component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"]
            },
            {
                path: 'addProduct', component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"]
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        component: _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_6__["OrderListComponent"]
                    },
                    {
                        path: ':id',
                        component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_21__["OrderComponent"]
                    }
                ]
            },
            {
                path: 'users', children: [
                    {
                        path: '', component: _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_19__["UsersListComponent"]
                    },
                    {
                        path: 'addUser', component: _components_user_editor_user_editor_component__WEBPACK_IMPORTED_MODULE_18__["UserEditorComponent"]
                    },
                    {
                        path: 'edit/:id', component: _components_user_editor_user_editor_component__WEBPACK_IMPORTED_MODULE_18__["UserEditorComponent"]
                    }
                ]
            }
        ]
    },
    {
        path: 'sign-in',
        component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"]
    },
    {
        path: 'sign-up',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"]
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _components_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__["CatalogComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_16__["ProductComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"],
                _components_user_editor_user_editor_component__WEBPACK_IMPORTED_MODULE_18__["UserEditorComponent"],
                _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_19__["UsersListComponent"],
                _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_6__["OrderListComponent"],
                _components_display_username_by_id_display_username_by_id_component__WEBPACK_IMPORTED_MODULE_20__["DisplayUsernameByIdComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_21__["OrderComponent"],
                _components_order_display_product_by_id_display_product_by_id_component__WEBPACK_IMPORTED_MODULE_22__["DisplayProductByIdComponent"],
                _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_17__["BasketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_24__["EditorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [_guards_only_admin_guard__WEBPACK_IMPORTED_MODULE_23__["OnlyAdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "about"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(title) {
        this.title = title;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title.setTitle('О нас');
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-panel {\r\n  padding: 3%;\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=admin.component.css.map */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-panel\">\r\n  <div class=\"btn-group\" role=\"group\">\r\n    <a [routerLink]=\"['/products']\" (click)=\"dataService.rowDisplay=true\" class=\"btn btn-outline-secondary\">\r\n      <i class=\"fas fa-folder-open\"></i>\r\n      Перейти в каталог товаров\r\n    </a>\r\n    <a [routerLink]=\"['/admin/users']\" class=\"btn btn-outline-secondary\">\r\n      <i class=\"fas fa-users-cog\"></i>\r\n      Перейти в список пользователей\r\n    </a>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <div class=\"btn-group\" role=\"group\">\r\n    <a [routerLink]=\"['/admin/addProduct']\" (click)=\"dataService.rowDisplay=true\" class=\"btn btn-outline-secondary\">\r\n      <i class=\"fas fa-plus\"></i>\r\n      <i class=\"fas fa-folder-open\"></i> Добавить продукт\r\n    </a>\r\n    <a [routerLink]=\"['/admin/users/addUser']\" class=\"btn btn-outline-secondary\">\r\n      <i class=\"fas fa-plus\"></i>\r\n      <i class=\"fas fa-users\"></i>\r\n      Добавить пользователя (не готово)\r\n    </a>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <a [routerLink]=\"['/admin/orders']\" class=\"btn btn-outline-secondary\">\r\n    <i class=\"fas fa-envelope\"></i>\r\n    Просмотреть заказы\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(activatedRoute, httpService, title, dataService, router) {
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.title = title;
        this.dataService = dataService;
        this.router = router;
        this.catalog = null;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Админ-панель');
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/basket/basket.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/basket/basket.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.overlay {\r\n  position: absolute;\r\n  background: rgba(15, 5, 5, 0.85);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\ndiv.overlay div.content-container {\r\n  background: white;\r\n  position: absolute;\r\n  left: 10%;\r\n  right: 10%;\r\n  top: 10%;\r\n  bottom: 10%;\r\n  height: 2000;\r\n}\r\n\r\ndiv.overlay div.content-container div.content {\r\n  height: 100%;\r\n  overflow: auto;\r\n  position: relative;\r\n}\r\n\r\ndiv.overlay div.content-container div.content .btn-outline-success {\r\n  margin: 5px 10px;\r\n}\r\n\r\ndiv.overlay div.content-container div.content h2.text-warning {\r\n  padding: 5%;\r\n}\r\n\r\ndiv.overlay div.content-container div.content div.top-bar {\r\n  border-bottom: 1px solid lightgray;\r\n  padding: 3px 8px;\r\n  text-align: end;\r\n  position: relative;\r\n}\r\n\r\ndiv.overlay div.content-container div.content div.top-bar i {\r\n  color: #560101;\r\n  font-size: 160%;\r\n  display: inline-box;\r\n  width: 2em;\r\n  text-align: center;\r\n  transition: all 0.3s;\r\n}\r\n\r\ndiv.overlay div.content-container div.content div.top-bar i:hover {\r\n  color: #ff350c;\r\n}\r\n\r\ndiv.overlay div.content-container div.content table {\r\n  padding: 1%;\r\n}\r\n\r\n/*# sourceMappingURL=basket.component.css.map */"

/***/ }),

/***/ "./src/app/components/basket/basket.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/basket/basket.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\">\r\n  <div class=\"content-container\">\r\n    <div class=\"content\">\r\n\r\n      <div class=\"top-bar\">\r\n        <i class=\"fas fa-times\" (click)=\"dataService.showBasket = false\"></i>\r\n      </div>\r\n\r\n      <h2 *ngIf=\"!dataService.username\" class=\"text-warning text-center\">\r\n        Войдите в аккаунт, чтобы получить доступ к корзине\r\n      </h2>\r\n\r\n      <h2 *ngIf=\"dataService.username && !products.length\" class=\"text-warning text-center\">\r\n        Корзина пуста...\r\n      </h2>\r\n\r\n\r\n      <table *ngIf=\"products.length\" class=\" table \">\r\n\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col \">№</th>\r\n            <th scope=\"col \">Название</th>\r\n            <th scope=\"col \">Цена</th>\r\n            <th scope=\"col \">Количество</th>\r\n            <th scope=\"col \">Итого</th>\r\n            <th scope=\"col \">Действия</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let product of products, let i = index\">\r\n\r\n            <td>\r\n              {{i + 1}}\r\n            </td>\r\n\r\n            <td>\r\n              <h5>\r\n                {{product.title}}\r\n              </h5>\r\n            </td>\r\n\r\n            <td>\r\n              <span>{{product.price / 100}} &#8372;</span>\r\n            </td>\r\n\r\n            <td>\r\n              {{product.count}}\r\n            </td>\r\n\r\n            <td>\r\n              {{product.count * product.price / 100}} &#8372;\r\n            </td>\r\n\r\n            <td>\r\n              <button class=\"btn btn-outline-secondary\" (click)=\"remooveFromBasket(product._id)\">\r\n                <i class=\"far fa-trash-alt\"></i> Убрать\r\n              </button>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td>{{totalPrice / 100}} &#8372;</td>\r\n            <td>\r\n              <button class=\"btn btn-outline-secondary\" (click)=\"remooveAllFromBasket()\">\r\n                <i class=\"far fa-trash-alt\"></i> Убрать все\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n      <button *ngIf=\"products.length\" class=\"btn btn-outline-success\" (click)=\"makeOrder()\">\r\n        <i class=\"fas fa-check\"></i> Оформить заказ\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/basket/basket.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/basket/basket.component.ts ***!
  \*******************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasketComponent = /** @class */ (function () {
    function BasketComponent(dataService, httpService, title) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.title = title;
        this.totalPrice = null;
        this.basket_ids = [];
        this.products = [];
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.getBasket();
    };
    BasketComponent.prototype.getBasket = function () {
        this.title.setTitle('Корзина');
        if (this.dataService.username)
            this.refreshBasket();
    };
    BasketComponent.prototype.refreshBasket = function () {
        var _this = this;
        this.basket_ids = [];
        this.products = [];
        this.httpService.getBasket().subscribe(function (data) {
            _this.basket_ids = data.json().basket;
            if (_this.basket_ids.length > 0) {
                _this.httpService.getProductsByManyIds(_this.basket_ids).subscribe(function (data) {
                    var productsCache = data.json().products;
                    productsCache.forEach(function (product, index) {
                        productsCache[index].count = _this.basket_ids.filter(function (x) { return x === product._id; }).length;
                        console.log(_this.basket_ids.filter(function (x) { return x === product._id; }).length);
                    });
                    _this.products = productsCache;
                    _this.totalPrice = 0;
                    _this.products.forEach(function (product) {
                        _this.totalPrice += product.price * product.count;
                    });
                });
            }
        });
    };
    BasketComponent.prototype.remooveFromBasket = function (id) {
        var _this = this;
        this.httpService.remooveFromBasket(id).subscribe(function (data) {
            if (data.json().err == false)
                _this.refreshBasket();
        });
    };
    BasketComponent.prototype.remooveAllFromBasket = function () {
        var _this = this;
        this.httpService.remooveAllFromBasket().subscribe(function (data) {
            if (data.json().err == false)
                _this.refreshBasket();
        });
    };
    BasketComponent.prototype.makeOrder = function () {
        if (confirm('Точно ?'))
            this.httpService.makeOrder().subscribe(function (data) {
                if (data.json().err == false)
                    alert('Заказ отправлен админу...');
            });
    };
    BasketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basket',
            template: __webpack_require__(/*! ./basket.component.html */ "./src/app/components/basket/basket.component.html"),
            styles: [__webpack_require__(/*! ./basket.component.css */ "./src/app/components/basket/basket.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], BasketComponent);
    return BasketComponent;
}());



/***/ }),

/***/ "./src/app/components/catalog/catalog.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/catalog/catalog.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.query-params-bar {\r\n  margin: 5px 10px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\ndiv.catalog-cards-list {\r\n  margin-top: 5px;\r\n}\r\n\r\ntable div.background-image-container {\r\n  height: 48px;\r\n  width: 64px;\r\n}\r\n\r\ntable div.background-image-container div.background-image {\r\n  z-index: 50;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  height: 48px;\r\n  width: 64px;\r\n  background-repeat: no-repeat;\r\n  background-attachment: local;\r\n  background-position: center;\r\n  background-size: contain;\r\n  background-color: white;\r\n}\r\n\r\ntable div.background-image-container:active div.background-image {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: 50%;\r\n  bottom: 50%;\r\n  height: 50%;\r\n  margin-top: -25%;\r\n  width: 50%;\r\n  margin-left: -25%;\r\n  border: 3px dashed lightgray;\r\n}\r\n\r\ntable td.admins-buttons div.btn-group {\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=catalog.component.css.map */"

/***/ }),

/***/ "./src/app/components/catalog/catalog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/catalog/catalog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row query-params-bar\">\r\n\r\n  <div class=\"form-check\">\r\n    <label class=\"form-check-label\">\r\n      <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"dataService.rowDisplay\"> В виде списка\r\n    </label>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"dataService.rowDisplay == true\" class=\"catalog-cards-list\">\r\n  <table class=\"table\">\r\n\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Фото</th>\r\n        <th scope=\"col\">Название</th>\r\n        <th scope=\"col\">Цена</th>\r\n        <th *ngIf=\"dataService.isAdmin\" scope=\"col\">Действия для админов</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody *ngIf=\"catalog !== null\">\r\n      <tr *ngFor=\"let prod of catalog\">\r\n\r\n        <td>\r\n          <div class=\"background-image-container\">\r\n            <div class=\"background-image\" [style.background-image]=\"'url(' + prod.images[0] + ')'\"></div>\r\n          </div>\r\n        </td>\r\n\r\n        <td>\r\n          <a [routerLink]=\"prod.link\" innerHTML=\"{{prod.title}}\"></a>\r\n        </td>\r\n\r\n        <td>\r\n          <span innerHTML=\"{{prod.price / 100}} &#8372;\"></span>\r\n        </td>\r\n\r\n        <td *ngIf=\"dataService.isAdmin\" class=\"admins-buttons\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n            <a [routerLink]=\"'../admin/editProduct/' + prod.link\" class=\"btn btn-outline-secondary\">\r\n              <i class=\"fas fa-edit\"></i> Редактировать\r\n            </a>\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"deleteProduct(prod.link)\">\r\n              <i class=\"far fa-trash-alt\"></i> Удалить\r\n            </button>\r\n          </div>\r\n        </td>\r\n\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"dataService.rowDisplay == false\" class=\"row catalog-cards-list\">\r\n  <div *ngFor=\"let prod of catalog\" class=\"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2\">\r\n    <figure class=\"card card-product\">\r\n      <div class=\"img-wrap\">\r\n        <img class=\"img-fluid\" src=\"{{prod.images[0]}}\">\r\n      </div>\r\n      <figcaption class=\"info-wrap\">\r\n        <h4 class=\"title\">\r\n          <a [routerLink]=\"prod.link\">{{prod.title}}</a>\r\n        </h4>\r\n        <p *ngIf=\"prod.short_description !== ''\" class=\"desc\">{{prod.short_description.substring(0, dataService.ShortDescriptionSymbolsCount)}}</p>\r\n        <div class=\"rating-wrap\">\r\n          <!-- <div class=\"label-rating\">Коментариев:</div> -->\r\n        </div>\r\n        <!-- rating-wrap.// -->\r\n      </figcaption>\r\n      <div class=\"bottom-wrap\">\r\n        <!-- <a href=\"\" class=\"btn btn-sm btn-primary float-right\">Купить</a> -->\r\n        <div class=\"price-wrap h5\">\r\n          <span class=\"price-new\">{{prod.price / 100}} &#8372;</span>\r\n        </div>\r\n        <!-- price-wrap.// -->\r\n      </div>\r\n      <!-- bottom-wrap.// -->\r\n    </figure>\r\n  </div>\r\n  <!-- col // -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/catalog/catalog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/catalog/catalog.component.ts ***!
  \*********************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(route, httpService, router, dataService, title) {
        this.route = route;
        this.httpService = httpService;
        this.router = router;
        this.dataService = dataService;
        this.title = title;
        this.catalog = null;
        this.query = {};
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Каталог товаров');
        // this.catalog = [{
        //   title: 'Kingston SSDNow A400 240GB 2.5" SATAIII TLC (SA400S37/240G)',
        //   link: 'kingston_sa400s37_240g',
        //   images: [
        //     'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202184.jpg',
        //     'https://i2.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202262.jpg',
        //     'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202340.jpg',
        //     'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202574.jpg',
        //     'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202652.jpg'
        //   ],
        //   short_description: '',
        //   description: `Твердотельный накопитель Kingston A400 радикально повышает отзывчивость компьютерных систем, обеспечивая невероятно малое время загрузки операционной системы, старта программ и копирования файлов, недостижимое при использовании механических жестких дисков. Под управлением контроллера последнего поколения, позволяющего достичь скоростей чтения и записи до 500 и 450 МБ/с соответственно, этот SSD оказывается в десять раз быстрее традиционных жестких дисков при нагрузках, требующих высокую производительность, позволяет получить очень отзывчивую работу системы в многозадачных условиях и в целом более быструю систему.`,
        //   price: 149999
        // }, {
        //   title: 'NVIDIA GTX 1060',
        //   link: 'msi_nvidia_gtx_1060',
        //   images: [
        //     'https://i.ebayimg.com/images/g/HEAAAOSwkjta-tCV/s-l640.jpg',
        //     'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-msi-geforce-gtx-1060-armor-6g-ocv1-912-v328-028__67289639m.jpg',
        //     'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-inno3d-gtx-1060-6gb-gddr5-x2-n106f-2sdn-n5gs__85193804m.jpg'
        //   ],
        //   short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        //   description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        // <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        // <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        // <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>`,
        //   price: 538099
        // }];
        this.reloadCatalog();
    };
    CatalogComponent.prototype.reloadCatalog = function () {
        var _this = this;
        this.httpService.getCatalog(this.query).subscribe(function (data) {
            _this.catalog = data.json().catalog;
            console.log(_this.catalog);
        });
    };
    CatalogComponent.prototype.deleteProduct = function (link) {
        var _this = this;
        console.log(link);
        var acceptStr = 'Удалить этот товар';
        if (prompt("Введите '" + acceptStr + "' для подтверждения") === acceptStr) {
            this.httpService.deleteProduct(link).subscribe(function (data) {
                if (data.json().err == false) {
                    _this.reloadCatalog();
                }
            });
        }
        else {
            alert('Действие отменено');
        }
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/components/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.css */ "./src/app/components/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/components/display-username-by-id/display-username-by-id.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/display-username-by-id/display-username-by-id.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/display-username-by-id/display-username-by-id.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/display-username-by-id/display-username-by-id.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span> {{username}} </span>"

/***/ }),

/***/ "./src/app/components/display-username-by-id/display-username-by-id.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/display-username-by-id/display-username-by-id.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DisplayUsernameByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUsernameByIdComponent", function() { return DisplayUsernameByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayUsernameByIdComponent = /** @class */ (function () {
    function DisplayUsernameByIdComponent(httpService) {
        this.httpService = httpService;
    }
    DisplayUsernameByIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getUserObject(this.user_id).subscribe(function (data) {
            _this.username = data.json().userObject.username;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayUsernameByIdComponent.prototype, "user_id", void 0);
    DisplayUsernameByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-username-by-id',
            template: __webpack_require__(/*! ./display-username-by-id.component.html */ "./src/app/components/display-username-by-id/display-username-by-id.component.html"),
            styles: [__webpack_require__(/*! ./display-username-by-id.component.css */ "./src/app/components/display-username-by-id/display-username-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DisplayUsernameByIdComponent);
    return DisplayUsernameByIdComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.editor-main-panel {\r\n  padding: 20px 8px;\r\n}\r\n\r\ndiv.spacer {\r\n  height: 150px;\r\n}\r\n\r\ntable td button {\r\n  display: inline-block;\r\n}\r\n\r\ntable td div.background-image-container {\r\n  height: 48px;\r\n  width: 64px;\r\n}\r\n\r\ntable td div.background-image-container div.background-image {\r\n  z-index: 50;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  height: 48px;\r\n  width: 64px;\r\n  background-repeat: no-repeat;\r\n  background-attachment: local;\r\n  background-position: center;\r\n  background-size: contain;\r\n  background-color: white;\r\n}\r\n\r\ntable td div.background-image-container:active div.background-image {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: 50%;\r\n  bottom: 50%;\r\n  height: 50%;\r\n  margin-top: -25%;\r\n  width: 50%;\r\n  margin-left: -25%;\r\n  border: 3px dashed lightgray;\r\n}\r\n\r\ntable td td.admins-buttons div.btn-group {\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=editor.component.css.map */"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-main-panel\">\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"title\">Заголовок</span>\r\n    </div>\r\n    <input [(ngModel)]=\"product.title\" placeholder=\"Заголовок\" type=\"text\" class=\"form-control\" aria-describedby=\"title\">\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"link\">Ссылка</span>\r\n    </div>\r\n    <input [(ngModel)]=\"product.link\" placeholder=\"Используется как часть URL ссылки на товар\" type=\"text\" class=\"form-control\"\r\n      aria-describedby=\"link\">\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"price\">Цена</span>\r\n    </div>\r\n    <input [(ngModel)]=\"product.price\" placeholder=\"Целое число (в копейках)\" type=\"number\" class=\"form-control\" aria-describedby=\"price\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"short_description\">Короткое описание (Осталось символов: {{dataService.ShortDescriptionSymbolsCount - product.short_description.length}})</label>\r\n\r\n    <textarea [(ngModel)]=\"product.short_description\" placeholder=\"Отображается в каталоге, можно оставить пустым\" type=\"text\"\r\n      rows=\"4\" maxlength=\"{{dataService.ShortDescriptionSymbolsCount}}\" class=\"form-control\" id=\"short_description\">\r\n    </textarea>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Полное описание</label>\r\n\r\n    <editor class=\"editor\" [(ngModel)]=\"product.description\" [init]=\"{plugins: 'link lists'}\" apiKey=\"vm3fozlgp04ukynxiispecc43xjwkph2xvlkhl2d15c1o5s1\"\r\n      id=\"description\"></editor>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Картинки</label>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <td> Миниатюра </td>\r\n          <td> Удалить </td>\r\n          <td> Ссылка </td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let imageUrl of product.images, let i = index\">\r\n          <td>\r\n            <div class=\"background-image-container\">\r\n              <div class=\"background-image\" [style.background-image]=\"'url(' + imageUrl + ')'\"></div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"deleteImageUrl(i)\">Удалить</button>\r\n          </td>\r\n          <td>\r\n            <a href=\"{{imageUrl}}\">{{imageUrl}}</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <div class=\"input-group mb-3\">\r\n      <div class=\"input-group-prepend\">\r\n        <button (click)=\"addImageUrl()\" class=\"btn btn-outline-secondary\" type=\"button\">Добавить</button>\r\n      </div>\r\n      <input [(ngModel)]=\"imageUrlBuffer\" type=\"text\" class=\"form-control\" placeholder=\"Можно поочередно добавить несколько ссылок на картинки, первая будет главной\"\r\n        aria-label=\"\" aria-describedby=\"basic-addon1\">\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <button *ngIf=\"!creatorMode\" class=\"btn btn-primary\" (click)=\"updateProduct()\">\r\n      Обновить\r\n    </button>\r\n\r\n    <button *ngIf=\"creatorMode\" class=\"btn btn-primary\" (click)=\"addProduct()\">\r\n      Добавить\r\n    </button>\r\n\r\n  </div>\r\n</div>\r\n\r\n{{productjson}}\r\n\r\n<div class=\"spacer\"></div>"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorComponent = /** @class */ (function () {
    function EditorComponent(activatedRoute, httpService, dataService, router, title) {
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.dataService = dataService;
        this.router = router;
        this.title = title;
        this.product = {
            title: '',
            link: '',
            images: [],
            short_description: '',
            description: ' ',
            price: null,
            updatedDate: null
        };
        this.productjson = '';
        this.link = null;
        this.creatorMode = false;
        this.imageUrlBuffer = '';
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Редактор товара');
        setInterval(function () {
            _this.productjson = JSON.stringify(_this.product);
        }, 1000);
        this.link = this.activatedRoute.snapshot.params['link'];
        if (!this.link) {
            this.creatorMode = true;
        }
        else
            this.httpService.getProduct(this.link).subscribe(function (data) {
                _this.product = data.json().product;
                _this.product.updatedDate = Date.now();
            });
    };
    EditorComponent.prototype.addImageUrl = function () {
        this.product.images.push(this.imageUrlBuffer);
        this.imageUrlBuffer = '';
    };
    EditorComponent.prototype.deleteImageUrl = function (index) {
        this.product.images.splice(index, 1);
    };
    EditorComponent.prototype.updateProduct = function () {
        var _this = this;
        if (confirm('Точно обновить?')) {
            this.httpService.updateProduct(this.product).subscribe(function (data) {
                if (data.json().err == false) {
                    _this.router.navigate(['/catalog/' + _this.product.link]);
                }
                else {
                    alert(data.json().err);
                }
            });
        }
    };
    EditorComponent.prototype.addProduct = function () {
        var _this = this;
        if (confirm('Точно добавить?')) {
            this.httpService.addProduct(this.product).subscribe(function (data) {
                if (data.json().err == false) {
                    _this.router.navigate(['/catalog/' + _this.product.link]);
                }
                else {
                    alert(data.json().err);
                }
            });
        }
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(title) {
        this.title = title;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Домашняя страница');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(title) {
        this.title = title;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Страница не нейдена');
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/order-list/order-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order-list/order-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <td>№</td>\r\n      <td>Имя пользователя</td>\r\n      <td>Товаров</td>\r\n      <td></td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let order of orders, let i = index\">\r\n\r\n      <td>{{i}}</td>\r\n      <td>\r\n        <app-display-username-by-id [user_id]=\"order.user_id\"></app-display-username-by-id>\r\n      </td>\r\n      <td>\r\n        {{order.product_ids.length}}\r\n      </td>\r\n      <td>\r\n        <a [routerLink]=\"order._id\" class=\"btn btn-outline-secondary\">\r\n          Перейти\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/components/order-list/order-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(httpService, title) {
        this.httpService = httpService;
        this.title = title;
        this.orders = [];
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Заказы');
        this.httpService.getOrders().subscribe(function (data) {
            console.log(data.json());
            _this.orders = data.json().orders;
        });
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/components/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/components/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/components/order/display-product-by-id/display-product-by-id.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/order/display-product-by-id/display-product-by-id.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order/display-product-by-id/display-product-by-id.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/order/display-product-by-id/display-product-by-id.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"product\" [routerLink]=\"['/products/' + product.link]\">\r\n  {{product.title}}\r\n</a>\r\n<span *ngIf=\"!product\">Не найден</span>"

/***/ }),

/***/ "./src/app/components/order/display-product-by-id/display-product-by-id.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/order/display-product-by-id/display-product-by-id.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DisplayProductByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayProductByIdComponent", function() { return DisplayProductByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayProductByIdComponent = /** @class */ (function () {
    function DisplayProductByIdComponent(httpService) {
        this.httpService = httpService;
        this.product = null;
    }
    DisplayProductByIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getProductById(this.id).subscribe(function (data) {
            _this.product = data.json().product;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayProductByIdComponent.prototype, "id", void 0);
    DisplayProductByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-product-by-id',
            template: __webpack_require__(/*! ./display-product-by-id.component.html */ "./src/app/components/order/display-product-by-id/display-product-by-id.component.html"),
            styles: [__webpack_require__(/*! ./display-product-by-id.component.css */ "./src/app/components/order/display-product-by-id/display-product-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DisplayProductByIdComponent);
    return DisplayProductByIdComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Заказ {{id}}\r\n</p>\r\n\r\n<p *ngIf=\"order\">\r\n  Пользователь:\r\n  <b>\r\n    <app-display-username-by-id [user_id]=\"order.user_id\"></app-display-username-by-id>\r\n  </b>\r\n\r\n</p>\r\n\r\n<ul style=\"list-style:none\" *ngIf=\"order\">\r\n  <li *ngFor=\"let product_id of order.product_ids, let i = index\">\r\n    <app-display-product-by-id [id]=\"product_id\"></app-display-product-by-id>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(httpService, activatedRoute) {
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
        this.id = null;
        this.order = null;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params['id'];
        this.httpService.getOrderById(this.id).subscribe(function (data) {
            _this.order = data.json().order;
        });
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.product-title {\r\n  margin: 18px 0 12px;\r\n}\r\n\r\ndiv.row div.left-side-bar {\r\n  padding: 0 6px;\r\n}\r\n\r\ndiv.row div.left-side-bar div.carousel {\r\n  border-top: 3px solid lightgray;\r\n  padding-top: 9px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ndiv.row div.left-side-bar div.carousel div.background-image {\r\n  height: 375px;\r\n  background-repeat: no-repeat;\r\n  background-attachment: local;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\ndiv.row div.left-side-bar div.description {\r\n  margin-top: 6px;\r\n  padding: 6px 4px;\r\n  border-top: 3px solid lightgray;\r\n}\r\n\r\ndiv.row div.right-side-bar {\r\n  padding: 0 6px;\r\n}\r\n\r\ndiv.row div.right-side-bar div.buy-panel-container div.buy-panel {\r\n  padding-top: 0.5em;\r\n}\r\n\r\ndiv.row div.right-side-bar div.buy-panel-container div.buy-panel span.price {\r\n  display: inline-block;\r\n  padding-right: 1em;\r\n  font-size: 125%;\r\n}\r\n\r\ndiv.row div.right-side-bar div.buy-panel-container div.buy-panel button {\r\n  font-size: 125%;\r\n}\r\n\r\ndiv.row div.right-side-bar div.buy-panel-container div.buy-panel span.inBasket {\r\n  padding-left: 1em;\r\n}\r\n\r\ndiv.row div.right-side-bar div.buy-panel-container div.buy-panel span.refresh {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 4px;\r\n}\r\n\r\ndiv.row div.right-side-bar div.buy-panel-container div.buy-panel span.refresh:hover {\r\n  color: red !important;\r\n  left: 3px;\r\n  top: -2px;\r\n}\r\n\r\ndiv.spacer {\r\n  height: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=product.component.css.map */"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"product !== null\" class=\"product-title\">{{product.title}}</h3>\r\n<div *ngIf=\"product !== null\" class=\"row\">\r\n\r\n\r\n  <div class=\"left-side-bar col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7\">\r\n\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n      <!-- <ol class=\"carousel-indicators\"> -->\r\n      <!-- <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li> -->\r\n      <!-- <li *ngFor=\"let imgUrl of product.images, let i = index\" [ngClass]=\"{'active': i == 0}\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"{{i}}\"></li> -->\r\n      <!-- </ol> -->\r\n\r\n      <div class=\"carousel-inner\">\r\n        <div *ngFor=\"let imgUrl of product.images, let i = index\" [ngClass]=\"{'active': i == 0}\" class=\"carousel-item\">\r\n          <!-- <img class=\"d-block w-100\" src=\"{{imgUrl}}\"> -->\r\n          <div class=\"background-image d-block w-100\" [style.background-image]=\"'url(' + imgUrl + ')'\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n\r\n    </div>\r\n\r\n    <div class=\"description\" innerHTML=\"{{product.description}}\"></div>\r\n\r\n  </div>\r\n\r\n  <div class=\"right-side-bar col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5\">\r\n\r\n    <div class=\"buy-panel-container\">\r\n      <div class=\"buy-panel\">\r\n\r\n        <span class=\"price text-success\">{{product.price / 100}} &#8372;</span>\r\n\r\n        <button class=\"btn btn-outline-primary\" [ngClass]=\"{'disabled': dataService.username == null, 'btn-outline-success': inBasket}\"\r\n          (click)=\"addToBasket()\">\r\n          <span *ngIf=\"!inBasket\">\r\n            <i class=\"fas fa-shopping-basket\"></i> Купить\r\n          </span>\r\n          <span *ngIf=\"inBasket\">\r\n            <i class=\"fas fa-check\"></i> Добавить еще\r\n          </span>\r\n        </button>\r\n        <br>\r\n        <span class=\"inBasket text-success\">В корзине: {{inBasket}} шт. на {{product.price / 100 * inBasket}} &#8372;</span>\r\n        <i class=\"fas fa-sync-alt refresh text-warning\" (click)=\"reloadInBasket()\"></i>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"comments\">\r\n      comments soon\r\n    </div> -->\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"spacer\"></div>"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, httpService, dataService, title) {
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.dataService = dataService;
        this.title = title;
        this.product = null;
        this.link = null;
        this.inBasket = 0;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Загрузка...');
        this.link = this.activatedRoute.snapshot.params['link'];
        this.httpService.getProduct(this.link).subscribe(function (data) {
            _this.product = data.json().product;
            _this.title.setTitle(_this.product.title);
            if (_this.dataService.username !== null) {
                _this.reloadInBasket();
            }
        });
    };
    ProductComponent.prototype.reloadInBasket = function () {
        var _this = this;
        this.httpService.howManyInBasket(this.product._id).subscribe(function (data) {
            _this.inBasket = data.json().n;
        });
    };
    ProductComponent.prototype.addToBasket = function () {
        var _this = this;
        if (this.dataService.username == null)
            return alert('Сперва войдите в аккаунт');
        this.httpService.addToBasket(this.product._id).subscribe(function (data) {
            if (!data.json().err)
                _this.reloadInBasket();
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\r\n\r\n        <h2 class=\"form-signin-heading\">Вход в аккаунт</h2>\r\n\r\n        <input class=\"form-control fix\" [ngClass]=\"{'danger': (!username.valid) && (!username.untouched), 'success': username.valid}\"\r\n          type=\"username\" placeholder=\"Username\" [(ngModel)]=\"loginData.username\" #username=\"ngModel\" id=\"username\" name=\"username\"\r\n          pattern=\"[a-zA-Z0-9_]{5,32}\" required=\"\">\r\n\r\n        <input class=\"form-control fix\" [ngClass]=\"{'danger': (!password.valid) && (!password.untouched), 'success': password.valid}\"\r\n          type=\"password\" placeholder=\"Password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" id=\"password\" name=\"password\"\r\n          pattern=\"[a-zA-Z0-9_]{5,32}\" required=\"\">\r\n\r\n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"(!username.valid) || (!password.valid)\" type=\"submit\">Вход</button>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n\r\n<div class=\"text-muted text-center\">\r\n  Нет аккаунта?\r\n  <a [routerLink]=\"'/sign-up'\">Зарегестрируйтесь!</a>\r\n</div>\r\n\r\n<style>\r\n  input.fix {\r\n    margin-bottom: 2px;\r\n  }\r\n\r\n  input.danger {\r\n    border: 1px solid red;\r\n    background-color: #ffcccc;\r\n  }\r\n\r\n  input.success {\r\n    border: 1px solid green;\r\n    background-color: #e6ffe6;\r\n  }\r\n</style>"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInComponent = /** @class */ (function () {
    function SignInComponent(httpService, router, eventsService, dataService, title) {
        this.httpService = httpService;
        this.router = router;
        this.eventsService = eventsService;
        this.dataService = dataService;
        this.title = title;
        this.loginData = {
            username: null,
            password: null
        };
    }
    SignInComponent.prototype.ngOnInit = function () { this.title.setTitle('Вход на сайт'); };
    SignInComponent.prototype.login = function () {
        var _this = this;
        this.httpService.signIn(this.loginData).subscribe(function (data) {
            var err = data.json().err;
            if (err)
                return alert(err);
            alert('Вход выполнен! \n Переадресация на главную страницу.');
            _this.dataService.reloadUser();
            _this.router.navigate(['/']);
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n      <form class=\"form-signin\" (ngSubmit)=\"registration()\">\r\n\r\n        <h2 class=\"form-signin-heading\">Регистрация</h2>\r\n\r\n        <input class=\"form-control fix\" [ngClass]=\"{'danger': (!username.valid) && (!username.untouched), 'success': username.valid}\"\r\n          type=\"username\" placeholder=\"Username\" [(ngModel)]=\"registrationData.username\" #username=\"ngModel\" id=\"username\"\r\n          name=\"username\" pattern=\"[a-zA-Z0-9_]{5,32}\" required=\"\">\r\n\r\n        <input class=\"form-control fix\" [ngClass]=\"{'danger': (!password.valid) && (!password.untouched), 'success': password.valid}\"\r\n          type=\"password\" placeholder=\"Password\" [(ngModel)]=\"registrationData.password\" #password=\"ngModel\" id=\"password\"\r\n          name=\"password\" pattern=\"[a-zA-Z0-9_]{5,32}\" required=\"\">\r\n\r\n        <input class=\"form-control fix\" [ngClass]=\"{'danger': (!confirm.untouched) && (!password.untouched) && ((!confirm.valid) || (password.value !== confirm.value)), 'success': (password.valid && (password.value == confirm.value))}\"\r\n          type=\"password\" placeholder=\"Confirm password\" [(ngModel)]=\"confirmPassword\" #confirm=\"ngModel\" id=\"confirm\" name=\"confirm\"\r\n          pattern=\"[a-zA-Z0-9_]{5,32}\" required=\"\">\r\n\r\n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"(!username.valid) || (!password.valid) || (password.value !== confirm.value)\"\r\n          type=\"submit\">Регистрация</button>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n<div class=\"text-muted text-center\">\r\n  Уже есть аккаунт?\r\n  <a [routerLink]=\"'/sign-in'\">Войдите!</a>\r\n</div>\r\n\r\n<style>\r\n  input.fix {\r\n    margin-bottom: 2px;\r\n  }\r\n\r\n  input.danger {\r\n    border: 1px solid red;\r\n    background-color: #ffcccc;\r\n  }\r\n\r\n  input.success {\r\n    border: 1px solid green;\r\n    background-color: #e6ffe6;\r\n  }\r\n</style>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(httpService, router, title) {
        this.httpService = httpService;
        this.router = router;
        this.title = title;
        this.registrationData = {
            username: null,
            password: null
        };
        this.confirmPassword = null;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Регистрация на сайте');
    };
    SignUpComponent.prototype.registration = function () {
        var _this = this;
        this.httpService.signUp(this.registrationData).subscribe(function (data) {
            var err = data.json().err;
            if (err)
                return alert(err);
            alert("Успех! Переадресация на страницу для входа.");
            _this.router.navigate(["/sign-in"]);
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/user-editor/user-editor.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/user-editor/user-editor.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-editor/user-editor.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-editor/user-editor.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-editor works!\r\n</p>\r\n{{user}}"

/***/ }),

/***/ "./src/app/components/user-editor/user-editor.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-editor/user-editor.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditorComponent", function() { return UserEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditorComponent = /** @class */ (function () {
    function UserEditorComponent(activatedRoute, httpService, dataService, title) {
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.dataService = dataService;
        this.title = title;
        this.id = null;
    }
    UserEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Редактор пользователя');
        this.id = this.activatedRoute.snapshot.params['id'];
        this.httpService.getUserObject(this.id).subscribe(function (data) {
            _this.user = JSON.stringify(data.json().userObject);
        });
    };
    UserEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-editor',
            template: __webpack_require__(/*! ./user-editor.component.html */ "./src/app/components/user-editor/user-editor.component.html"),
            styles: [__webpack_require__(/*! ./user-editor.component.css */ "./src/app/components/user-editor/user-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], UserEditorComponent);
    return UserEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/users-list/users-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table td.admins-buttons div.btn-group {\r\n  display: inline-block;\r\n}\r\n/*# sourceMappingURL=users-list.component.css.map */"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-list\">\r\n  <table class=\"table\">\r\n\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">username</th>\r\n        <th scope=\"col\">status</th>\r\n        <th scope=\"col\">Действия</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody *ngIf=\"users.length\">\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>\r\n          {{user.username}}\r\n        </td>\r\n        <td>\r\n          {{user.status}}\r\n        </td>\r\n        <td>\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n            <a [routerLink]=\"edit/user._id\" class=\"btn btn-outline-secondary\">\r\n              <i class=\"fas fa-edit\"></i> Редактировать (не готово)\r\n            </a>\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"deleteUser(user._id)\">\r\n              <i class=\"far fa-trash-alt\"></i> Удалить\r\n            </button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(httpService, title) {
        this.httpService = httpService;
        this.title = title;
        this.users = [];
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Список пользователей');
        this.reloadUsers();
    };
    UsersListComponent.prototype.reloadUsers = function () {
        var _this = this;
        this.httpService.getUserList().subscribe(function (data) {
            _this.users = data.json().users;
        });
    };
    UsersListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        if (confirm('Удалить пользователя?')) {
            this.httpService.deleteUser(id).subscribe(function (data) {
                if (!data.json().err) {
                    _this.reloadUsers();
                    alert('Удален');
                }
            });
        }
        else {
            alert('Действие отменено');
        }
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/components/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/components/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/guards/only-admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/only-admin.guard.ts ***!
  \********************************************/
/*! exports provided: OnlyAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyAdminGuard", function() { return OnlyAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnlyAdminGuard = /** @class */ (function () {
    function OnlyAdminGuard(http, router, dataService) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
    }
    OnlyAdminGuard.prototype.canActivate = function (next, state) {
        return this.dataService.isAdmin;
    };
    OnlyAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], OnlyAdminGuard);
    return OnlyAdminGuard;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(httpService) {
        this.httpService = httpService;
        this.ShortDescriptionSymbolsCount = 135;
        this.username = null;
        this.isAdmin = false;
        this.rowDisplay = false;
        this.showBasket = false;
    }
    DataService.prototype.reloadUser = function () {
        var _this = this;
        this.httpService.getUsername().subscribe(function (data) {
            _this.username = data.json();
        });
        this.httpService.getIsAdmin().subscribe(function (data) {
            _this.isAdmin = data.json();
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsService = /** @class */ (function () {
    /**
     * временно не используется
     */
    function EventsService() {
        this.reloadUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventsService.prototype.reloadUser = function () {
        this.reloadUserEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventsService.prototype, "reloadUserEvent", void 0);
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseurl = 'http://localhost:8080';
    }
    // для юзера
    HttpService.prototype.signIn = function (loginData) {
        return this.http.post('api/sign-in', loginData);
    };
    HttpService.prototype.signUp = function (registrationData) {
        return this.http.post('api/sign-up', registrationData);
    };
    HttpService.prototype.logout = function () {
        return this.http.get('api/logout');
    };
    HttpService.prototype.getUsername = function () {
        return this.http.get('api/username');
    };
    HttpService.prototype.getIsAdmin = function () {
        return this.http.get('api/isAdmin');
    };
    HttpService.prototype.isAuthenticated = function () {
        return this.http.get('api/isAuthenticated');
    };
    HttpService.prototype.getBasket = function () {
        return this.http.get('api/getBasket');
    };
    HttpService.prototype.remooveFromBasket = function (id) {
        return this.http.get('api/remooveFromBasket', { params: { id: id } });
    };
    HttpService.prototype.addToBasket = function (id) {
        return this.http.get('api/addToBasket', { params: { id: id } });
    };
    HttpService.prototype.makeOrder = function () {
        return this.http.get('api/makeOrder');
    };
    HttpService.prototype.remooveAllFromBasket = function () {
        return this.http.get('api/remooveAllFromBasket');
    };
    // безопасные роуты
    HttpService.prototype.getCatalog = function (query) {
        return this.http.get('api/getCatalog');
    };
    HttpService.prototype.getProduct = function (link) {
        return this.http.get('api/getProductByLink', { params: { link: link } });
    };
    HttpService.prototype.getProductById = function (id) {
        return this.http.get('api/getProductById', { params: { id: id } });
    };
    HttpService.prototype.howManyInBasket = function (id) {
        return this.http.get('api/howManyInBasket', { params: { id: id } });
    };
    HttpService.prototype.getProductsByManyIds = function (ids) {
        return this.http.post('api/getProductsByManyIds', { ids: ids });
    };
    // для админов 
    HttpService.prototype.deleteProduct = function (link) {
        return this.http.delete('api/deleteProduct', { params: { link: link } });
    };
    HttpService.prototype.updateProduct = function (product) {
        console.log(product);
        return this.http.post('api/updateProduct', { product: product });
    };
    HttpService.prototype.addProduct = function (product) {
        console.log(product);
        return this.http.post('api/addProduct', { product: product });
    };
    HttpService.prototype.getUserList = function () {
        return this.http.get('api/getUserList');
    };
    HttpService.prototype.deleteUser = function (id) {
        return this.http.delete('api/deleteUser', { params: { id: id } });
    };
    HttpService.prototype.getUserObject = function (id) {
        return this.http.get('api/getUserObject', { params: { id: id } });
    };
    HttpService.prototype.getOrders = function () {
        return this.http.get('api/getOrders');
    };
    HttpService.prototype.getOrderById = function (id) {
        return this.http.get('api/getOrder', { params: { id: id } });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work-files\qbex-test-backend-dev\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map