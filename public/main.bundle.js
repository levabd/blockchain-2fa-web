webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_client_detail_client_detail_component__ = __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_client_create_client_create_component__ = __webpack_require__("../../../../../src/app/components/client-create/client-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_client_edit_client_edit_component__ = __webpack_require__("../../../../../src/app/components/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_components_dashboard_matPaginatorIntlRu_module__ = __webpack_require__("../../../../../src/app/components/dashboard/matPaginatorIntlRu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_clients_data_clients_data_component__ = __webpack_require__("../../../../../src/app/components/clients-data/clients-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_13__components_client_client_component__["a" /* ClientComponent */], data: { title: 'Список клиентов' } },
    { path: 'client-details/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */], data: { title: 'Подробно о клиенте' } },
    { path: 'client-create', component: __WEBPACK_IMPORTED_MODULE_15__components_client_create_client_create_component__["a" /* ClientCreateComponent */], data: { title: 'Создание клиента' } },
    { path: 'client-edit/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_client_edit_client_edit_component__["a" /* ClientEditComponent */], data: { title: 'Редактирование клиента' } },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_clients_data_clients_data_component__["a" /* ClientsDataComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_client_create_client_create_component__["a" /* ClientCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_client_edit_client_edit_component__["a" /* ClientEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21_app_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_22__angular_material_paginator__["b" /* MatPaginatorIntl */], useClass: __WEBPACK_IMPORTED_MODULE_23_app_components_dashboard_matPaginatorIntlRu_module__["a" /* MatPaginatorIntlRu */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/client-create/client-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-client-form  {\n    box-shadow: 0 0 5px 0px black;\n    padding: 50px;\n    margin: 20px;\n    height: 600px;\n}\n\n.create-client-form mat-form-field,\n.create-client-form mat-checkbox,\n.create-client-form mat-list {\n    width: 400px;\n}\n\n@media (max-width: 750px) {\n    .create-client-form mat-form-field,\n    .create-client-form mat-checkbox,\n    .create-client-form mat-list {\n        width: 300px;\n        font-size: .99em;\n    }\n    .create-client-form h1 {\n        font-size: .99em;\n    }\n    .create-client-form mat-checkbox {\n        font-size: .8em;\n    }\n}\n\n@media (max-width: 450px) {\n    .create-client-form mat-form-field,\n    .create-client-form mat-checkbox,\n    .create-client-form mat-list {\n        width: 200px;\n        font-size: .95em;\n    }\n    .create-client-form h1 {\n        font-size: .95em;\n    }\n    .create-client-form mat-checkbox {\n        font-size: .7em;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-create/client-create.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"create-client\">\n  <div class=\"create-client-container\">\n    <mat-card>\n      <mat-card-title-group>\n        <mat-card-title>Новый клиент 2FA</mat-card-title>\n        <i class=\"material-icons\">assignment_ind</i>\n      </mat-card-title-group>\n      <mat-card-footer>\n        <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n    <section class=\"create-client-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" (ngSubmit)=\"saveClient()\" #clientForm=\"ngForm\">\n        <mat-form-field hintLabel=\"Максимум 50 символов\">\n          <input type=\"text\" matInput placeholder=\"ФИО клиента\" [(ngModel)]=\"client.name\" name=\"name\" required maxlength=\"50\" #nameInput=\"ngModel\">\n          <mat-icon matSuffix>person</mat-icon>\n          <mat-hint align=\"end\">{{nameInput.value?.length || 0}}/50</mat-hint>\n          <mat-error *ngIf=\"nameInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!nameInput.hasError('required')\">Неверно введено имя</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field hintLabel=\"Максимум 20 символов\">\n          <input type=\"tel\" matInput placeholder=\"Номер телефона\" [(ngModel)]=\"client.phoneNumber\" maxlength=\"20\" name=\"phoneNumber\" required #phoneNumberInput=\"ngModel\">\n          <mat-icon matSuffix>phone</mat-icon>\n          <mat-hint align=\"end\">{{phoneNumberInput.value?.length || 0}}/20</mat-hint>\n          <mat-error *ngIf=\"phoneNumberInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!phoneNumberInput.hasError('required')\">Неверный формат номера</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field hintLabel=\"Максимум 12 цифр\">\n          <input type=\"text\" matInput placeholder=\"ИИН\" [(ngModel)]=\"client.uin\" name=\"uin\" required #uinInput=\"ngModel\" oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\" maxlength=\"12\">\n          <mat-icon matSuffix>contacts</mat-icon>\n          <mat-hint align=\"end\">{{uinInput.value?.length || 0}}/12</mat-hint>\n          <mat-error *ngIf=\"uinInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!uinInput.hasError('required')\">Неверный формат номера</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field hintLabel=\"Максимум 50 символов\">\n          <input type=\"email\" matInput placeholder=\"E-mail\" [(ngModel)]=\"client.email\" name=\"email\" required maxlength=\"50\" #emailInput=\"ngModel\">\n          <mat-icon matSuffix>email</mat-icon>\n          <mat-hint align=\"end\">{{emailInput.value?.length || 0}}/50</mat-hint>\n          <mat-error *ngIf=\"emailInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!emailInput.hasError('required')\">Неверный формат email</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"client.sex\" name=\"sex\" required placeholder=\"Пол\" required>\n            <mat-option *ngFor=\"let s of sex\" [value]=\"s\">{{s}}\n            </mat-option>\n          </mat-select>\n          <mat-icon matSuffix>wc</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Дата рождения\" [(ngModel)]=\"client.birthDate\" name=\"birthDate\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <div>\n          <button mat-raised-button  [routerLink]=\"['/dashboard']\">Отмена</button>\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!clientForm.form.valid\">Создать</button>\n        </div>\n      </form>\n    </section>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/client-create/client-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientCreateComponent = (function () {
    function ClientCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.client = {};
        this.sex = ['Мужской', 'Женский'];
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
    };
    ClientCreateComponent.prototype.saveClient = function () {
        var _this = this;
        this.http.post('http://176.36.70.236:3002/clients', this.client)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/client-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ClientCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-create',
            template: __webpack_require__("../../../../../src/app/components/client-create/client-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client-create/client-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-all-clients {\n    margin-left: 30px;\n}\n\n.detail-client-container {\n    box-shadow: 0 0 5px 0px black;\n    padding: 50px;\n    margin: 20px;\n    height: 700px;\n    width: 600px;\n}   \n\n.detail-client-container mat-card {\n    width: 550px;\n}\n\n.detail-client-container mat-card-subtitle{\n    padding: 5px;\n}\n\n.detail-client-container .material-icons i.icon-head{\n    font-size: 1.99em;\n}\n.detail-client-container .material-icons{\n    font-size: 1.99em;\n}\n\n\n\n\n@media (max-width: 750px) {\n    .detail-client-container mat-card, {\n        width: 300px;\n        font-size: .99em;\n    }\n    .detail-client-container h1 {\n        font-size: .99em;\n    }\n    .detail-client-container mat-checkbox {\n        font-size: .8em;\n    }\n}\n\n@media (max-width: 450px) {\n    .detail-client-container mat-card, {\n        width: 200px;\n        font-size: .95em;\n    }\n    .detail-client-container h1 {\n        font-size: .95em;\n    }\n    .detail-client-container mat-checkbox {\n        font-size: .7em;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"detail-client\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div class=\"detail-client-container\">\n    <mat-card>\n      <mat-card-title-group fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-card-title>Подробные сведения о клиенте</mat-card-title>\n        <button mat-raised-button class=\"btn-all-clients\" color=\"primary\" [routerLink]=\"['/dashboard']\">\n          <mat-icon aria-label=\"Все клиенты\">assignment_ind</mat-icon>\n          {{ '  Все клиенты' | uppercase }}</button>\n        <!-- <i class=\"material-icons icon-head\">assignment_ind</i> -->\n      </mat-card-title-group>\n      <mat-card-footer>\n        <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n    <div>\n      <mat-card>\n        <mat-card-title-group>\n          <mat-divider></mat-divider>\n          <mat-card-subtitle>ФИО</mat-card-subtitle>\n          <mat-card-title>{{ client.Name }}</mat-card-title>\n          <i class=\"material-icons\">perm_identity</i>\n        </mat-card-title-group>\n        <mat-divider></mat-divider>\n        <mat-card-title-group>\n          <mat-card-subtitle>НОМЕР ТЕЛЕФОНА</mat-card-subtitle>\n          <mat-card-title>{{ client.PhoneNumber }}</mat-card-title>\n          <i class=\"material-icons\">phone</i>\n        </mat-card-title-group>\n        <mat-divider></mat-divider>\n        <mat-card-title-group>\n          <mat-card-subtitle>ИИН</mat-card-subtitle>\n          <mat-card-title>{{ client.Uin }}</mat-card-title>\n          <i class=\"material-icons\">recent_actors</i>\n        </mat-card-title-group>\n        <mat-divider></mat-divider>\n        <mat-card-title-group>\n          <mat-card-subtitle>EMAIL</mat-card-subtitle>\n          <mat-card-title>{{ client.Email }}</mat-card-title>\n          <i class=\"material-icons\">email</i>\n        </mat-card-title-group>\n        <mat-divider></mat-divider>\n        <mat-card-title-group>\n          <mat-card-subtitle>ПОЛ</mat-card-subtitle>\n          <mat-card-title>{{ client.Sex }}</mat-card-title>\n          <i class=\"material-icons\">wc</i>\n        </mat-card-title-group>\n        <mat-divider></mat-divider>\n        <mat-card-title-group>\n          <mat-card-subtitle>ДАТА РОЖДЕНИЯ</mat-card-subtitle>\n          <mat-card-title>{{ client.Birthdate | date: 'd.MM.yyyy' }}</mat-card-title>\n          <i class=\"material-icons\">date_range</i>\n        </mat-card-title-group>\n        <mat-card-title-group>\n          <mat-card-subtitle>ПОДТВЕРЖДЕН В СИСТЕМЕ</mat-card-subtitle>\n          <mat-card-title *ngIf=\"client.IsVerified;else notVerified\">Да</mat-card-title>\n          <ng-template #notVerified>\n            <mat-card-title>Нет</mat-card-title>\n          </ng-template>\n          <i class=\"material-icons\">verified_user</i>\n        </mat-card-title-group>\n        <mat-card-footer>\n          <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n          <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n            <button mat-raised-button color=\"primary\" [routerLink]=\"['/client-edit', client._id]\">{{ 'Редактировать' | uppercase }}</button>\n            <!-- <button mat-raised-button color=\"warn\" (click)=\"deleteClient(client._id)\">{{ 'Удалить' | uppercase }}</button> -->\n          </mat-card-actions>\n        </mat-card-footer>\n      </mat-card>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDetailComponent = (function () {
    function ClientDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.client = {};
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        this.getClientDetail(this.route.snapshot.params['id']);
    };
    ClientDetailComponent.prototype.getClientDetail = function (id) {
        var _this = this;
        this.http.get('http://176.36.70.236:3002/clients/' + id).subscribe(function (data) {
            _this.client = data;
        });
    };
    ClientDetailComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.http.delete('http://176.36.70.236:3002/clients/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/clients']);
        }, function (err) {
            console.log(err);
        });
    };
    ClientDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-detail',
            template: __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client-edit/client-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-client-form {\n    box-shadow: 0 0 5px 0px black;\n    padding: 50px;\n    margin: 20px;\n    height: 600px;\n}\n\n.edit-client-form mat-form-field,\n.edit-client-form mat-checkbox,\n.edit-client-form mat-list {\n    width: 400px;\n}\n\n@media (max-width: 750px) {\n    .edit-client-form mat-form-field,\n    .edit-client-form mat-checkbox,\n    .edit-client-form mat-list {\n        width: 300px;\n        font-size: .99em;\n    }\n    .edit-client-form h1 {\n        font-size: .99em;\n    }\n    .edit-client-form mat-checkbox {\n        font-size: .8em;\n    }\n}\n\n@media (max-width: 450px) {\n    .edit-client-form mat-form-field,\n    .edit-client-form mat-checkbox,\n    .edit-client-form mat-list {\n        width: 200px;\n        font-size: .95em;\n    }\n    .edit-client-form h1 {\n        font-size: .95em;\n    }\n    .edit-client-form mat-checkbox {\n        font-size: .7em;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-edit/client-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"edit-client\">\n  <div class=\"edit-client-container\">\n    <mat-card>\n      <mat-card-title-group>\n        <mat-card-title>Редактирование клиента 2FA</mat-card-title>\n        <i class=\"material-icons\">assignment_ind</i>\n      </mat-card-title-group>\n      <mat-card-footer>\n        <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n    <section class=\"edit-client-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" (ngSubmit)=\"updateClient(client._id)\" #clientForm=\"ngForm\">\n        <mat-form-field hintLabel=\"Максимум 50 символов\">\n          <input type=\"text\" matInput placeholder=\"ФИО клиента\" [(ngModel)]=\"client.name\" name=\"name\" required maxlength=\"50\" #nameInput=\"ngModel\">\n          <mat-icon matSuffix>person</mat-icon>\n          <mat-hint align=\"end\">{{nameInput.value?.length || 0}}/50</mat-hint>\n          <mat-error *ngIf=\"nameInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!nameInput.hasError('required')\">Неверно введено имя</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field hintLabel=\"Максимум 20 символов\">\n          <input type=\"tel\" matInput placeholder=\"Номер телефона\" [(ngModel)]=\"client.phoneNumber\" name=\"phoneNumber\" required #phoneNumberInput=\"ngModel\">\n          <mat-icon matSuffix>phone</mat-icon>\n          <mat-hint align=\"end\">{{phoneNumberInput.value?.length || 0}}/20</mat-hint>\n          <mat-error *ngIf=\"phoneNumberInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!phoneNumberInput.hasError('required')\">Неверный формат номера</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field hintLabel=\"Максимум 12 цифр\">\n          <input type=\"text\" matInput placeholder=\"ИИН\" [(ngModel)]=\"client.uin\" name=\"uin\" required maxlength=\"12\" #uinInput=\"ngModel\" oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n          <mat-icon matSuffix>contacts</mat-icon>\n          <mat-hint align=\"end\">{{uinInput.value?.length || 0}}/12</mat-hint>\n          <mat-error *ngIf=\"uinInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!uinInput.hasError('required')\">Неверный формат номера</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field hintLabel=\"Максимум 50 символов\">\n          <input type=\"email\" matInput placeholder=\"E-mail\" [(ngModel)]=\"client.email\" name=\"email\" required maxlength=\"50\" #emailInput=\"ngModel\">\n          <mat-icon matSuffix>email</mat-icon>\n          <mat-hint align=\"end\">{{emailInput.value?.length || 0}}/50</mat-hint>\n          <mat-error *ngIf=\"emailInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n          <mat-error *ngIf=\"!emailInput.hasError('required')\">Неверный формат email</mat-error>\n          <mat-error></mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"client.sex\" name=\"sex\" required placeholder=\"Пол\" required>\n            <mat-option *ngFor=\"let s of sex\" [value]=\"s\">{{s}}\n            </mat-option>\n          </mat-select>\n          <mat-icon matSuffix>wc</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Дата рождения\" [(ngModel)]=\"client.birthDate\" name=\"birthDate\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!clientForm.form.valid\">ОБНОВИТЬ</button>\n      </form>\n    </section>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/client-edit/client-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientEditComponent = (function () {
    function ClientEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.client = {};
        this.sex = ['Мужской', 'Женский'];
        this.hide = true;
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        this.getClient(this.route.snapshot.params['id']);
    };
    ClientEditComponent.prototype.getClient = function (id) {
        var _this = this;
        this.http.get('http://176.36.70.236:3002/clients/' + id).subscribe(function (data) {
            _this.client = data;
        });
    };
    ClientEditComponent.prototype.updateClient = function (id) {
        var _this = this;
        this.client.updated_date = Date.now();
        this.http.put('http://176.36.70.236:3002/clients/' + id, this.client)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/client-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ClientEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-edit',
            template: __webpack_require__("../../../../../src/app/components/client-edit/client-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client-edit/client-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n  <h1>СПИСОК КЛИЕНТОВ </h1>\n  <a [routerLink]=\"['/client-create']\" class=\"btn btn-default btn-lg align-middle\">\n    <i class=\"material-icons align-middle\">note_add</i>\n    <span>НОВЫЙ КЛИЕНТ</span>\n  </a>\n  <table class=\"table table-hover\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">НОМЕР ТЕЛЕФОНА</th>\n        <th scope=\"col\">ИИН</th>\n        <th scope=\"col\">ФИО</th>\n        <th scope=\"col\">ПОДТВЕРЖДЕН</th>\n        <th scope=\"col\">EMAIL</th>\n        <th scope=\"col\">ПОЛ</th>\n        <th scope=\"col\">ДАТА РОЖДЕНИЯ</th>\n        <th scope=\"col\">ДЕЙСТВИЯ</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let client of clients\">\n        <td>{{ client.phoneNumber }}</td>\n        <td>{{ client.uin }}</td>\n        <td>{{ client.name }}</td>\n        <td>{{ client.isVerified }}</td>\n        <td>{{ client.email }}</td>\n        <td>{{ client.sex }}</td>\n        <td>{{ client.birthDate | date: 'd.MM.yyyy' }}</td>\n        <td>\n          <a [routerLink]=\"['/client-details', client._id]\" ><i class=\"material-icons\" placeholder=\"ПРОСМОТР\">pageview</i></a>\n          <a [routerLink]=\"['/client-edit', client._id]\" ><i class=\"material-icons\" placeholder=\"РЕДАКТИРОВАТЬ\">mode_edit</i></a>\n          <a (click)=\"deleteClient(client._id)\" ><i class=\"material-icons\" placeholder=\"УДАЛИТЬ\">delete_forever</i></a>\n        </td>\n      </tr>\n    </tbody>\n  </table> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientComponent = (function () {
    function ClientComponent(http) {
        this.http = http;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://176.36.70.236:3002/clients').subscribe(function (data) {
            console.log(data);
            _this.clients = data;
        });
    };
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client',
            template: __webpack_require__("../../../../../src/app/components/client/client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client/client.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/clients-data/clients-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clients-data/clients-data.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  clients-data works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/clients-data/clients-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsDataComponent = (function () {
    function ClientsDataComponent() {
    }
    ClientsDataComponent.prototype.ngOnInit = function () {
    };
    ClientsDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients-data',
            template: __webpack_require__("../../../../../src/app/components/clients-data/clients-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/clients-data/clients-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsDataComponent);
    return ClientsDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 600px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"home-guest\">\n  <div class=\"home-container\">\n    <mat-card>\n      <mat-card-title-group>\n        <mat-card-title>ПАНЕЛЬ УПРАВЛЕНИЯ 2FA</mat-card-title>\n        <mat-card-subtitle>Система управления клиентами сервиса двухфакторной аутентификации</mat-card-subtitle>\n        <i class=\"material-icons\">settings</i>\n      </mat-card-title-group>\n      <mat-card-footer>\n        <mat-progress-bar mode=\"determinate\" value=\"100\"></mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n    <mat-tab-group>\n      <mat-tab label=\"ВСЕ КЛИЕНТЫ\">\n          <button mat-icon-button color=\"primary\" [routerLink]=\"['/client-create']\">\n            <mat-icon aria-label=\"Создание нового клиента\">assignment_ind</mat-icon>\n            Новый клиент\n          </button>\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Поиск клиента\">\n          </mat-form-field>\n        </div>\n        <mat-table #table [dataSource]=\"dataSource\">\n\n          <!-- phoneNumber Column -->\n          <ng-container matColumnDef=\"phoneNumber\">\n            <mat-header-cell *matHeaderCellDef> Номер телефона </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.PhoneNumber}} </mat-cell>\n          </ng-container>\n\n          <!-- uin Column -->\n          <ng-container matColumnDef=\"uin\">\n            <mat-header-cell *matHeaderCellDef> ИИН </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.Uin}} </mat-cell>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> ФИО </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.Name}} </mat-cell>\n          </ng-container>\n\n          <!-- isVerified Column -->\n          <ng-container matColumnDef=\"isVerified\">\n            <mat-header-cell *matHeaderCellDef> Подтвержден </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.IsVerified}} </mat-cell>\n          </ng-container>\n\n          <!-- email Column -->\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef> Почтовый адрес </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.Email}} </mat-cell>\n          </ng-container>\n\n          <!-- sex Column -->\n          <ng-container matColumnDef=\"sex\">\n            <mat-header-cell *matHeaderCellDef> Пол </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.Sex}} </mat-cell>\n          </ng-container>\n\n          <!-- birthDate Column -->\n          <ng-container matColumnDef=\"birthDate\">\n            <mat-header-cell *matHeaderCellDef> Дата рождения </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.user.Birthdate | date: 'd.MM.yyyy'}} </mat-cell>\n          </ng-container>\n\n          <!-- actions Column -->\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Действия </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"primary\" [routerLink]=\"['/client-details', element.address]\">\n                <mat-icon aria-label=\"Просмотр карточки клиента\">pageview</mat-icon>\n              </button>\n              <button mat-icon-button color=\"accent\" [routerLink]=\"['/client-edit', element.address]\">\n                <mat-icon aria-label=\"Редактирование клиента\">mode_edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"deleteClient(element.address)\">\n                <mat-icon aria-label=\"Удаление клиента\">delete</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\">\n        </mat-paginator>\n      </mat-tab>\n      <mat-tab label=\"ИНФОРМАЦИЯ\">\n        \n      </mat-tab>\n      <mat-tab label=\"ПРОФИЛЬ АДМИНИСТРАТОРА\">\n        \n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ClientDetailComponent } from '../client-detail/client-detail.component';
var DashboardComponent = (function () {
    function DashboardComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        // ngOnInit() {
        // }
        this.displayedColumns = ['phoneNumber', 'uin', 'name', 'isVerified', 'email', 'sex', 'birthDate', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material_table__["a" /* MatTableDataSource */](this.clients);
    }
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://176.36.70.236:3002/clients').subscribe(function (data) {
            console.log(data);
            _this.clients = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material_table__["a" /* MatTableDataSource */](_this.clients);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    DashboardComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.http.delete('http://176.36.70.236:3002/clients/' + id)
            .subscribe(function (res) {
            // this.router.navigate(['/clients']);
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material_paginator__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material_paginator__["a" /* MatPaginator */])
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

// const ELEMENT_DATA: Element[] = this.clients;
// const ELEMENT_DATA: Element[] = [
//   {
//     phoneNumber: '+770544521452',
//     uin: 820145211452145,
//     name: 'Велимир Фомин',
//     isVerified: true,
//     email: 'hilanennam-9669@yopmail.com',
//     sex: 'Мужской',
//     birthDate: '2012-04-23T18:25:43.511Z',
//     // actions: {
//     //   view: () => {
//     //     this.clientDetail.getClientDetail(this.route.snapshot.params['id']);
//     //   },
//     // }
// },
// {
//   "phoneNumber": "+770544521452",
//   "uin": "820145211452145",
//   "name": "Велимир Фомин",
//   "isVerified": "true",
//   "email": "hilanennam-9669@yopmail.com",
//   "sex": "Мужской",
//   "birthDate": "2012-04-23T18:25:43.511Z"
// },
// {
//   "phoneNumber": "+770544521452",
//   "uin": "820145211452145",
//   "name": "Владлен Тимофеев",
//   "isVerified": "true",
//   "email": "yrepucerre-1834@yopmail.com",
//   "sex": "Мужской",
//   "birthDate": "2012-04-23T18:25:43.511Z"
// },
// {
//   "phoneNumber": "+770544521452",
//   "uin": "820145211452145",
//   "name": "Трофим Зюганов",
//   "isVerified": "true",
//   "email": "xyqicera-8296@yopmail.com",
//   "sex": "Мужской",
//   "birthDate": "2012-04-23T18:25:43.511Z"
// },
// {
//   "phoneNumber": "+770544521452",
//   "uin": "820145211452145",
//   "name": "Александр Гуляев",
//   "isVerified": "true",
//   "email": "acaffuce-0074@yopmail.com",
//   "sex": "Мужской",
//   "birthDate": "2012-04-23T18:25:43.511Z"
// },
// {
//   "phoneNumber": "+770544521452",
//   "uin": "820145211452145",
//   "name": "Альфред Алексеев",
//   "isVerified": "true",
//   "email": "worrofynny-2280@yopmail.com",
//   "sex": "Мужской",
//   "birthDate": "2012-04-23T18:25:43.511Z"
// },
// {
//   "phoneNumber": "+770544521452",
//   "uin": "820145211452145",
//   "name": "Динар Селиверстов",
//   "isVerified": "true",
//   "email": "koganicame-4391@yopmail.com",
//   "sex": "Мужской",
//   "birthDate": "2012-04-23T18:25:43.511Z"
// }
// ];


/***/ }),

/***/ "../../../../../src/app/components/dashboard/matPaginatorIntlRu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatPaginatorIntlRu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MatPaginatorIntlRu = (function (_super) {
    __extends(MatPaginatorIntlRu, _super);
    function MatPaginatorIntlRu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastPageLabel = 'Последняя страница';
        _this.firstPageLabel = 'Первая страница';
        _this.itemsPerPageLabel = 'Количество записей на странице';
        _this.nextPageLabel = 'Следующая страница';
        _this.previousPageLabel = 'Предыдущая страница';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length == 0 || pageSize == 0) {
                return "0 of " + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " \u0438\u0437 " + length;
        };
        return _this;
    }
    return MatPaginatorIntlRu;
}(__WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatPaginatorIntl */]));



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column nowrap;\n        flex-flow: column nowrap;  \n    \n  }\n\n  .mat-card {\n    margin: 0 16px 16px 0;\n    width: 800px;\n  }\n\n  .material-icons{\n      font-size: 5em;\n  }\n  \n  .demo-card-blue {\n    background-color: #b0becc;  \n    \n  }\n\n  .mat-card-actions {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n\n  p {\n      font-size: 16px;\n      padding: 5px;\n      text-align: justify;\n  }\n  a {\n    display: block;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section *ngIf=\"authService.loggedIn()\" class=\"home-admin\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"home-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <mat-card>\n          Добро пожаловать, Администратор!\n        </mat-card>\n        <mat-card>\n          <mat-card-title-group>\n            <mat-card-title>Кабинет администратора 2FA</mat-card-title>\n            <mat-card-subtitle>Система управления клиентами сервиса двухфакторной аутентификации</mat-card-subtitle>\n            <i class=\"material-icons\">recent_actors</i>\n          </mat-card-title-group>\n        </mat-card>        \n        <mat-card>\n          <mat-card-subtitle>Описание сервиса</mat-card-subtitle>\n          <mat-card-title>Сервис двухфакторной аутентификации 2FA</mat-card-title>\n          <mat-card-content>\n            <h2>Что такое двухфакторная аутентификация</h2>\n            <p>Двухфакторная аутентификация – это система идентификации пользователя с использованием двух разных способов. Цель\n              такого метода аутентификации – сделать защиту аккаунта пользователя более эффективной и надежной.</p>\n            <h2>Как работает двухфакторная аутентификация</h2>\n            <p>Самый простой и распространенный вариант – это использование для авторизации логина и пароля (на первом шаге) и одноразового\n              пароля из СМС (на втором шаге). Помимо СМС возможны такие варианты:</p>\n              <p>- Push-уведомление</p>\n              <p>- Telegram-уведомление</p>\n              <p>- Токен</p>\n            <p>Несмотря на многообразие дополнительных способов подтверждения личности пользователя, суть метода проста – убедиться\n              в том, что именно пользователь пытается войти в свой аккаунт, а не злоумышленник. Для злоумышленника наличие дополнительного\n              фактора аутентификации чаще всего становится непреодолимой преградой, ведь одно дело – взломать, подобрать или\n              похитить пароль, совершенно другое – завладеть мобильным телефоном реального пользователя.</p>\n            <p>\n              Стоит отметить, что двухфакторная аутентификация не является 100% надежным способом защиты: злоумышленники научились не только\n              компрометировать Ваши обычные логины и пароли, но и выманивать одноразовые коды. Тем не менее затраты и сложность\n              «работы» злоумышленника многократно возрастают. Именно поэтому сервис двухфакторной аутентификации является, пожалуй,\n              самым надежным методом не только защиты, но и предупреждения пользователя об опасности взлома аккаунта (если Вам\n              пришло СМС с одноразовым паролем, но Вы ее не запрашивали, то самое время менять старый пароль аккаунта на новый).\n            </p>\n          </mat-card-content>\n          <mat-divider [inset]=\"true\"></mat-divider>\n          <mat-card-actions>\n              <button mat-button>\n                <a target=\"_blank\" href=\"https://goo.gl/mLAiaB\" style=\"cursor: pointer;text-decoration: none;\">ПОДРОБНО</a>\n              </button>        \n          </mat-card-actions>\n        </mat-card>\n    \n        <mat-card>\n          <mat-card-subtitle>Используемая технология блокчейн</mat-card-subtitle>\n          <img mat-card-image src=\"https://www.hyperledger.org/wp-content/uploads/2018/01/Hyperledger_Sawtooth_Logo_Color.png\">\n          <mat-card-title>Hyperledger Sawtooth </mat-card-title>\n          <mat-card-content>\n            <mat-divider></mat-divider>\n            <p>Hyperledger Sawtooth предоставляет инструменты для создания собственных реализаций блокчейнов, которые могут применяться\n              для создания распределённых верифицированных баз данных, состоящих из взаимосвязанных транзакций, заверенных последующими\n              транзакциями и исключающих изменение информации задним числом. Поступающие данные добавляются в виде обновлений\n              на основе транзакций, которые применяются к распределённой между несколькими участниками БД. Участник может быть\n              не связан цепочкой доверия, а достоверность БД координируется алгоритмами достижения консенсуса (для компрометации\n              базы нужно одновременно получить контроль за состоянием на стороне большего числа участника).</p>\n            <mat-divider></mat-divider>\n            <p>Механизм консенсуса: Proof of Elapsed Time</p>\n            <mat-divider></mat-divider>\n            <p>Платформа не привязана к конкретной области и может применяться для финансового учёта, ведения кредитной истории,\n              создания реестров ресурсов, инвентаризации, медицинских картотек и журналов различных бизнес-процессов. В разработке\n              платформы приняли участие более 50 компаний, включая Amazon Web Services, Huawei, IBM, Intel, Microsoft Azure,\n              Ericsson, T-Mobile и Wind River. Внедрено несколько экспериментальных прототипов систем учёта на базе Hyperledger\n              Sawtooth, обеспечивающих фиксацию авторских прав на музыкальные и мультимедийные произведения, ведение медицинских\n              карт и поддержание системы идентификации клиентов финансовых организаций (KYC).</p>\n            <mat-divider></mat-divider>\n            <mat-list>\n              <mat-list-item>\n                Особенности Hyperledger Sawtooth:\n              </mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>\n                Применение смарт-контрактов для автоматизации бизнес-процессов и голосования по изменению конфигурации блокчейна (например,\n                для добавления новых участников и смарт-контрактов)\n              </mat-list-item>\n    \n              <mat-list-item>\n                Расширенный движок выполнения транзакций, обеспечивающий параллельную обработку транзакций для ускорения формирования блоков\n                и их проверки\n              </mat-list-item>\n              <mat-list-item>\n                Поддержка интеграции с инструментарием платформы Ethereum и возможность запуска сторонних смарт-контрактов\n              </mat-list-item>\n              <mat-list-item>\n                Возможность обновления или замены протокола достижения консенсуса по мере роста распределённой сети. Например, можно перейти\n                на более масштабируемые алгоритмы расчёта консенсуса при их появлении\n              </mat-list-item>\n              <mat-list-item>\n                Возможность разработки смарт-контрактов на различных языках программирования, в том числе на Go, JavaScript и Python\n              </mat-list-item>\n            </mat-list>\n          </mat-card-content>\n          <mat-card-actions align=\"end\">\n            <button mat-button>\n              <a target=\"_blank\" href=\"https://www.linuxfoundation.org/press-release/hyperledger-releases-hyperledger-sawtooth-1-0/\" style=\"cursor: pointer;text-decoration: none;\">ПОДРОБНО О HYPERLEDGER SAWTOOTH</a>\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n</section>\n<section *ngIf=\"!authService.loggedIn()\" class=\"home-guest\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div class=\"home-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card>\n      Добро пожаловать, Гость!\n    </mat-card>\n    <mat-card>\n      <mat-card-title-group>\n        <mat-card-title>Кабинет администратора 2FA</mat-card-title>\n        <mat-card-subtitle>Система управления клиентами сервиса двухфакторной аутентификации</mat-card-subtitle>\n        <i class=\"material-icons\">recent_actors</i>\n      </mat-card-title-group>\n    </mat-card>\n    <mat-card>\n      <mat-card-subtitle>Зарегистрируйтесь, если Вас нет в системе</mat-card-subtitle>\n      <mat-card-title>Авторизуйтесь и получите возможность управлять клиентами 2FA</mat-card-title>\n      <mat-card-content>\n        <p>Интерфейс управления пользователями является гибким инструментом настройки учетных записей клиентов сервиса 2FA,\n          позволяющим администраторам добавлять «внешних» пользователей (ручная регистрация) в сервис 2FA, удалять учетные\n          записи, редактировать учетную информацию (адрес электронной почты, имя пользователя и т.д.) уже зарегистрированных\n          пользователей.\n        </p>\n      </mat-card-content>\n      <mat-divider [inset]=\"true\"></mat-divider>\n      <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n        <button mat-raised-button [routerLink]=\"['/register']\">{{ 'Зарегистрироваться' | uppercase }}</button>\n        <button mat-raised-button color=\"primary\" [routerLink]=\"['/login']\">{{ 'Войти' | uppercase }}</button>\n      </mat-card-actions>\n      <mat-card-footer>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </mat-card-footer>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-subtitle>Описание сервиса</mat-card-subtitle>\n      <mat-card-title>Сервис двухфакторной аутентификации 2FA</mat-card-title>\n      <mat-card-content>\n        <h2>Что такое двухфакторная аутентификация</h2>\n        <p>Двухфакторная аутентификация – это система идентификации пользователя с использованием двух разных способов. Цель\n          такого метода аутентификации – сделать защиту аккаунта пользователя более эффективной и надежной.</p>\n        <h2>Как работает двухфакторная аутентификация</h2>\n        <p>Самый простой и распространенный вариант – это использование для авторизации логина и пароля (на первом шаге) и одноразового\n          пароля из СМС (на втором шаге). Помимо СМС возможны такие варианты:</p>\n          <p>- Push-уведомление</p>\n          <p>- Telegram-уведомление</p>\n          <p>- Токен</p>\n        <p>Несмотря на многообразие дополнительных способов подтверждения личности пользователя, суть метода проста – убедиться\n          в том, что именно пользователь пытается войти в свой аккаунт, а не злоумышленник. Для злоумышленника наличие дополнительного\n          фактора аутентификации чаще всего становится непреодолимой преградой, ведь одно дело – взломать, подобрать или\n          похитить пароль, совершенно другое – завладеть мобильным телефоном реального пользователя.</p>\n        <p>\n          Стоит отметить, что двухфакторная аутентификация не является 100% надежным способом защиты: злоумышленники научились не только\n          компрометировать Ваши обычные логины и пароли, но и выманивать одноразовые коды. Тем не менее затраты и сложность\n          «работы» злоумышленника многократно возрастают. Именно поэтому сервис двухфакторной аутентификации является, пожалуй,\n          самым надежным методом не только защиты, но и предупреждения пользователя об опасности взлома аккаунта (если Вам\n          пришло СМС с одноразовым паролем, но Вы ее не запрашивали, то самое время менять старый пароль аккаунта на новый).\n        </p>\n      </mat-card-content>\n      <mat-divider [inset]=\"true\"></mat-divider>\n      <mat-card-actions>\n          <button mat-button>\n            <a target=\"_blank\" href=\"https://goo.gl/mLAiaB\" style=\"cursor: pointer;text-decoration: none;\">ПОДРОБНО</a>\n          </button>        \n      </mat-card-actions>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-subtitle>Используемая технология блокчейн</mat-card-subtitle>\n      <img mat-card-image src=\"https://www.hyperledger.org/wp-content/uploads/2018/01/Hyperledger_Sawtooth_Logo_Color.png\">\n      <mat-card-title>Hyperledger Sawtooth </mat-card-title>\n      <mat-card-content>\n        <mat-divider></mat-divider>\n        <p>Hyperledger Sawtooth предоставляет инструменты для создания собственных реализаций блокчейнов, которые могут применяться\n          для создания распределённых верифицированных баз данных, состоящих из взаимосвязанных транзакций, заверенных последующими\n          транзакциями и исключающих изменение информации задним числом. Поступающие данные добавляются в виде обновлений\n          на основе транзакций, которые применяются к распределённой между несколькими участниками БД. Участник может быть\n          не связан цепочкой доверия, а достоверность БД координируется алгоритмами достижения консенсуса (для компрометации\n          базы нужно одновременно получить контроль за состоянием на стороне большего числа участника).</p>\n        <mat-divider></mat-divider>\n        <p>Механизм консенсуса: Proof of Elapsed Time</p>\n        <mat-divider></mat-divider>\n        <p>Платформа не привязана к конкретной области и может применяться для финансового учёта, ведения кредитной истории,\n          создания реестров ресурсов, инвентаризации, медицинских картотек и журналов различных бизнес-процессов. В разработке\n          платформы приняли участие более 50 компаний, включая Amazon Web Services, Huawei, IBM, Intel, Microsoft Azure,\n          Ericsson, T-Mobile и Wind River. Внедрено несколько экспериментальных прототипов систем учёта на базе Hyperledger\n          Sawtooth, обеспечивающих фиксацию авторских прав на музыкальные и мультимедийные произведения, ведение медицинских\n          карт и поддержание системы идентификации клиентов финансовых организаций (KYC).</p>\n        <mat-divider></mat-divider>\n        <mat-list>\n          <mat-list-item>\n            Особенности Hyperledger Sawtooth:\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            Применение смарт-контрактов для автоматизации бизнес-процессов и голосования по изменению конфигурации блокчейна (например,\n            для добавления новых участников и смарт-контрактов)\n          </mat-list-item>\n\n          <mat-list-item>\n            Расширенный движок выполнения транзакций, обеспечивающий параллельную обработку транзакций для ускорения формирования блоков\n            и их проверки\n          </mat-list-item>\n          <mat-list-item>\n            Поддержка интеграции с инструментарием платформы Ethereum и возможность запуска сторонних смарт-контрактов\n          </mat-list-item>\n          <mat-list-item>\n            Возможность обновления или замены протокола достижения консенсуса по мере роста распределённой сети. Например, можно перейти\n            на более масштабируемые алгоритмы расчёта консенсуса при их появлении\n          </mat-list-item>\n          <mat-list-item>\n            Возможность разработки смарт-контрактов на различных языках программирования, в том числе на Go, JavaScript и Python\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button mat-button>\n          <a target=\"_blank\" href=\"https://www.linuxfoundation.org/press-release/hyperledger-releases-hyperledger-sawtooth-1-0/\" style=\"cursor: pointer;text-decoration: none;\">ПОДРОБНО О HYPERLEDGER SAWTOOTH</a>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form {\n    box-shadow: 0 0 5px 0px black;\n    padding: 50px;\n    margin: 20px;\n    height: 600px;\n}\n\nmat-form-field,\nmat-checkbox,\nmat-list {\n    width: 400px;\n}\n\n@media (max-width: 750px) {\n    mat-form-field,\n    mat-checkbox,\n    mat-list {\n        width: 300px;\n        font-size: .99em;\n    }\n    h1 {\n        font-size: .99em;\n    }\n    mat-checkbox {\n        font-size: .8em;\n    }\n}\n\n@media (max-width: 450px) {\n    mat-form-field,\n    mat-checkbox,\n    mat-list {\n        width: 200px;\n        font-size: .95em;\n    }\n    h1 {\n        font-size: .95em;\n    }\n    mat-checkbox {\n        font-size: .7em;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n  <mat-list>\n    <mat-list-item>\n      <h1>{{'Вход в систему' | uppercase }}</h1>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n  </mat-list>\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #signupForm=\"ngForm\" (submit)=\"onLoginSubmit()\">\n    <mat-form-field hintLabel=\"Максимум 20 символов\">\n      <input type=\"text\" matInput placeholder=\"Введите Ваш логин\" [(ngModel)]=\"username\" name=\"username\" required maxlength=\"20\"\n        #usernameInput=\"ngModel\">\n      <mat-icon matSuffix>contacts</mat-icon>\n      <mat-hint align=\"end\">{{usernameInput.value?.length || 0}}/20</mat-hint>\n      <mat-error *ngIf=\"usernameInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n      <mat-error *ngIf=\"!usernameInput.hasError('required')\">Неверный формат логина</mat-error>\n      <mat-error></mat-error>\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Минимум 6 символов\">\n      <input type=\"password\" matInput placeholder=\"Введите Ваш пароль\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"password\"\n        name=\"password\" required minlength=\"6\" #pwInput=\"ngModel\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      <mat-hint align=\"end\">{{ pwInput.value?.length}} / 6</mat-hint>\n      <mat-error>Пароль не может быть меньше 6 символов</mat-error>\n    </mat-form-field>\n    <mat-checkbox ngModel name=\"remember-me\" value=\"remember-me\" color=\"primary\">Запомнить меня</mat-checkbox>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"signupForm.invalid\">Войти</button>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Вы успешно авторизовались в системе', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    font-size: 14px;\n    text-decoration: none;\n    color: white;\n  }\n  \n  a:hover,\n  a:active {\n    color: lightgray;\n  }\n  \n  .navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div fxHide.gt-xs>\n    <button (click)=\"onToggleSidenav()\" mat-icon-button>\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <div>\n    <!-- <a routerLink=\"/\">КАБИНЕТ АДМИНИСТРАТОРА</a> -->\n    <li class=\"navigation-items\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n      <a [routerLink]=\"['/']\">\n        <span>ГЛАВНАЯ</span>\n      </a>\n    </li>\n  </div>\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\"  fxHide.xs>\n    <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['/dashboard']\">ПАНЕЛЬ ЗАДАЧ </a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['/profile']\">ПРОФИЛЬ </a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['/login']\">ВОЙТИ </a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['/register']\">РЕГИСТРАЦИЯ</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\">\n        <a style=\"cursor: pointer\" (click)=\"onLogoutClick()\">ВЫЙТИ</a>\n      </li>\n    </ul>\n  </div>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.sidenavToogle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Вы вышли из кабинета. Авторизуйтесь повторно при необходимости', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.onToggleSidenav = function () {
        this.sidenavToogle.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "sidenavToogle", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-form {\n    box-shadow: 0 0 5px 0px black;\n    padding: 50px;\n    margin: 20px;\n    height: 600px;\n}\n\nmat-form-field,\nmat-checkbox,\nmat-list {\n    width: 400px;\n}\n\n@media (max-width: 750px) {\n    mat-form-field,\n    mat-checkbox,\n    mat-list {\n        width: 300px;\n        font-size: .99em;\n    }\n    h1 {\n        font-size: .99em;\n    }\n    mat-checkbox {\n        font-size: .8em;\n    }\n}\n\n@media (max-width: 450px) {\n    mat-form-field,\n    mat-checkbox,\n    mat-list {\n        width: 200px;\n        font-size: .95em;\n    }\n    h1 {\n        font-size: .95em;\n    }\n    mat-checkbox {\n        font-size: .7em;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"register-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-list>\n    <mat-list-item>\n      <h1>{{'Регистрация' | uppercase }}</h1>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n  </mat-list>\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #signupForm=\"ngForm\" (submit)=\"onRegisterSubmit()\">\n    <mat-form-field hintLabel=\"Максимум 50 символов\">\n      <input type=\"text\" matInput placeholder=\"Введите Ваше имя\" [(ngModel)]=\"name\" name=\"name\" required maxlength=\"50\" #nameInput=\"ngModel\">\n      <mat-icon matSuffix>person</mat-icon>\n      <mat-hint align=\"end\">{{nameInput.value?.length || 0}}/50</mat-hint>\n      <mat-error *ngIf=\"nameInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n      <mat-error *ngIf=\"!nameInput.hasError('required')\">Неверно введено имя</mat-error>\n      <mat-error></mat-error>\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Максимум 20 символов\">\n      <input type=\"text\" matInput placeholder=\"Введите Ваш логин\" [(ngModel)]=\"username\" name=\"username\" required maxlength=\"20\"\n        #usernameInput=\"ngModel\">\n      <mat-icon matSuffix>contacts</mat-icon>\n      <mat-hint align=\"end\">{{usernameInput.value?.length || 0}}/20</mat-hint>\n      <mat-error *ngIf=\"usernameInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n      <mat-error *ngIf=\"!usernameInput.hasError('required')\">Неверный формат логина</mat-error>\n      <mat-error></mat-error>\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Максимум 50 символов\">\n      <input type=\"email\" matInput placeholder=\"Введите Ваш e-mail\" [(ngModel)]=\"email\" name=\"email\" required maxlength=\"50\" #emailInput=\"ngModel\">\n      <mat-icon matSuffix>email</mat-icon>\n      <mat-hint align=\"end\">{{emailInput.value?.length || 0}}/50</mat-hint>\n      <mat-error *ngIf=\"emailInput.hasError('required')\">Поле не должно быть пустым</mat-error>\n      <mat-error *ngIf=\"!emailInput.hasError('required')\">Неверный формат email</mat-error>\n      <mat-error></mat-error>\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Минимум 6 символов\">\n      <input type=\"password\" matInput placeholder=\"Введите Ваш пароль\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"password\"\n        name=\"password\" required minlength=\"6\" #pwInput=\"ngModel\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      <mat-hint align=\"end\">{{ pwInput.value?.length}} / 6</mat-hint>\n      <mat-error>Пароль не может быть меньше 6 символов</mat-error>\n    </mat-form-field>\n    <!-- <mat-form-field>\n      <mat-select [(ngModel)]=\"role\" name=\"role\" required placeholder=\"Роль\" required>\n        <mat-option [value]=\"option1\">superadmin</mat-option>\n        <mat-option [value]=\"option2\">admin</mat-option>\n      </mat-select>\n      <mat-icon matSuffix>supervisor_account</mat-icon>\n    </mat-form-field> -->\n    <mat-checkbox ngModel name=\"agree\" required color=\"primary\">Я принимаю условия соглашения</mat-checkbox>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"signupForm.invalid\">Зарегистрироваться</button>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage, snackBar) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.snackBar = snackBar;
        this.hide = true;
        this.emailError = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            role: this.role
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            // this.flashMessage.show('Пожалуйста заполните все поля', { cssClass: 'alert-danger', timeout: 3000 });
            this.openSnackBar('Пожалуйста заполните все поля', 'OK');
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // this.flashMessage.show('Введите корректный Email', { cssClass: 'alert-danger', timeout: 3000 });
            this.emailError = true;
            this.openSnackBar('Введите корректный Email', 'OK');
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.openSnackBar('Вы успешно зарегистрированы и можете войти', 'OK');
                // this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                // this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.openSnackBar('Ошибка при регистрации, повторите', 'OK');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSnackBar */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatProgressBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatProgressBarModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://176.36.70.236:3002/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://176.36.70.236:3002/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://176.36.70.236:3002/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.isAdmin = function () {
        this.loadRole();
        if (this.role === 'superadmin') {
            return 'superadmin';
        }
        if (this.role === 'admin') {
            return 'admin';
        }
    };
    AuthService.prototype.loadRole = function () {
        var role = localStorage.getItem('user.role');
        this.role = role;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map