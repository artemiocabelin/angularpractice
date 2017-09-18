webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'dashboard', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'users/:uid', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__users_users_component__["a" /* UsersComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<h1>The List</h1>\n<a [routerLink]=\"['dashboard']\">Home</a>\n<button *ngIf=\"loggedIn\" (click)=\"logoutUser()\">Logout</button>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_service__ = __webpack_require__("../../../../../src/app/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_listingService, _router) {
        this._listingService = _listingService;
        this._router = _router;
        this.setAppComponent();
    }
    AppComponent.prototype.logoutUser = function () {
        var _this = this;
        this._listingService.logoutCurrentUser()
            .then(function (data) {
            console.log('successful logout');
            _this.setAppComponent();
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            console.log('error logging out');
            console.log(error);
        });
    };
    AppComponent.prototype.setAppComponent = function () {
        var _this = this;
        console.log('setting app component');
        this._listingService.getCurrentUser()
            .then(function (data) {
            console.log('currently logged in');
            _this.loggedIn = true;
        })
            .catch(function (error) {
            console.log('not logged in');
            console.log(error);
            if (error.status === 401) {
                _this.loggedIn = false;
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listing_service__ = __webpack_require__("../../../../../src/app/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- Import FormsModule
 // <-- Import HttpModule





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__listing_service__["a" /* ListingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n\n<h1>Welcome, {{currentUser.username}}</h1>\n<form (submit)=\"onSubmit()\">\n  <label>Title: \n    <input \n      type=\"text\" \n      name=\"title\"\n      minlength=\"5\"\n      [(ngModel)]=\"item.title\"\n      #title = \"ngModel\"\n      />\n  </label>\n  <div style=\"color: red;\" *ngIf=\"!title.valid && (title.dirty || title.touched)\">\n    <p *ngIf=\"title.errors.minlength\">Title must be at least 5 characters long</p> \n  </div>\n  <label>description: \n    <input \n      type=\"text\" \n      name=\"description\"\n      minlength=\"10\"\n      [(ngModel)]=\"item.description\"\n      #description = \"ngModel\"\n      />\n  </label>\n  <div style=\"color: red;\" *ngIf=\"!description.valid && (description.dirty || description.touched)\">\n    <p *ngIf=\"description.errors.minlength\">Description must be at least 10 characters long</p> \n  </div>\n  <input type=\"submit\" value=\"Create item\">\n</form>\n\n<p>These are all your items</p>\n<p>Complete</p>\n<ul>\n  <li *ngFor=\"let item of done\">{{item.title}} - {{item.description}} <button (click)=\"undoItem(item._id)\">Undo</button><button (click)=\"removeItem(item._id)\">Remove</button></li>\n</ul>\n<p>Pending</p>\n<ul>\n  <li *ngFor=\"let item of pending\">{{item.title}} - {{item.description}} <button (click)=\"completeItem(item._id)\">Complete</button><button (click)=\"removeItem(item._id)\">Remove</button></li>\n</ul>\n\n<p>Other users:</p>\n<ul>\n  <li *ngFor=\"let user of otherUsers\"><a [routerLink]=\"['/users', user._id]\">{{user.username}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listing_service__ = __webpack_require__("../../../../../src/app/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_listingService, _router) {
        this._listingService = _listingService;
        this._router = _router;
        this.item = new __WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]();
        this.done = [];
        this.pending = [];
        this.allUsers = [];
        this.otherUsers = [];
        this.setDashboardComponent();
    }
    DashboardComponent.prototype.setDashboardComponent = function () {
        var _this = this;
        this._listingService.getCurrentUser()
            .then(function (data) {
            console.log('got then response');
            _this.currentUser = data;
            console.log(_this.currentUser);
            _this.sortItems(data.items);
            _this.getAllUsers();
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
            if (error.status === 401) {
                _this._router.navigate(['']);
            }
        });
    };
    DashboardComponent.prototype.getAllUsers = function () {
        var _this = this;
        this._listingService.getUsers()
            .then(function (data) {
            console.log('got then response for get users');
            _this.allUsers = data;
            console.log(_this.allUsers);
            _this.sortUsers(_this.allUsers);
        })
            .catch(function (error) {
            console.log('got catch response for get users');
            console.log(error);
        });
    };
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('submitting item create info');
        this._listingService.creatItemForUser(this.item)
            .then(function (data) {
            console.log('got successful response creating item');
            console.log(data);
            _this.setDashboardComponent();
        })
            .catch(function (error) {
            console.log('got error response creating item');
            console.log(error);
        });
        this.item = new __WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]();
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.sortItems = function (items) {
        this.done = [];
        this.pending = [];
        console.log(items);
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.complete) {
                this.done.push(item);
            }
            else {
                this.pending.push(item);
            }
        }
    };
    DashboardComponent.prototype.undoItem = function (item_id) {
        var _this = this;
        var i_id = { id: item_id };
        this._listingService.undoItemById(i_id)
            .then(function (data) {
            console.log('success');
            console.log(data);
            _this.setDashboardComponent();
        })
            .catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    DashboardComponent.prototype.completeItem = function (item_id) {
        var _this = this;
        var i_id = { id: item_id };
        this._listingService.completeItemById(i_id)
            .then(function (data) {
            console.log('success');
            console.log(data);
            _this.setDashboardComponent();
        })
            .catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    DashboardComponent.prototype.removeItem = function (item_id) {
        var _this = this;
        var i_id = { id: item_id };
        this._listingService.removeItemById(i_id)
            .then(function (data) {
            console.log('success');
            console.log(data);
            _this.setDashboardComponent();
        })
            .catch(function (error) {
            console.log('error');
            console.log(error);
        });
    };
    DashboardComponent.prototype.sortUsers = function (users) {
        this.otherUsers = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.username !== this.currentUser.username) {
                this.otherUsers.push(user);
            }
        }
        console.log(this.otherUsers);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__listing_service__["a" /* ListingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(title, description, complete, creator) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (complete === void 0) { complete = false; }
        if (creator === void 0) { creator = ''; }
        this.title = title;
        this.description = description;
        this.complete = complete;
        this.creator = creator;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login to User this App</h1>\n<form (submit)=\"onSubmit()\">\n  <input \n    type=\"text\" \n    name=\"username\"\n    required\n    minlength=\"5\"\n    [(ngModel)] = \"user.username\"\n    #username = ngModel\n    />\n    <input type=\"submit\" value=\"Login\" [disabled] = \"username.invalid\"/>\n</form>\n<div style=\"color: red;\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n  <p *ngIf=\"username.errors.required\"> Username is Required</p> \n  <p *ngIf=\"username.errors.minlength\"> Username must be at least 5 characters long</p> \n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_service__ = __webpack_require__("../../../../../src/app/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingComponent = (function () {
    function LandingComponent(_listingService, _router, _appComponent) {
        this._listingService = _listingService;
        this._router = _router;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    }
    LandingComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('component submitting login');
        this._listingService.loginUserButCreateIfNotFound(this.user)
            .then(function (response) {
            console.log('got response');
            console.log(response);
            _this._appComponent.setAppComponent();
            _this._router.navigate(['dashboard']);
        })
            .catch(function (error) {
            console.log('got error');
            console.log(error);
        });
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    };
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], LandingComponent);

var _a, _b, _c;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingService = (function () {
    function ListingService(_http) {
        this._http = _http;
    }
    ListingService.prototype.getUsers = function () {
        console.log('service is now sending a request to get all users');
        return this._http.get('api/users')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.loginUserButCreateIfNotFound = function (userData) {
        console.log('service is now sending a post request to server for login');
        return this._http.post('api/users/login', userData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.getCurrentUser = function () {
        console.log('service getting current User');
        return this._http.get('api/users/current')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.retrieveUserById = function (userId) {
        return this._http.get('api/users/' + userId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.logoutCurrentUser = function () {
        console.log('service logging user out');
        return this._http.get('api/users/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.creatItemForUser = function (itemData) {
        console.log('service is now making a request to create Item');
        return this._http.post('api/items/create', itemData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.undoItemById = function (itemId) {
        console.log('service is now making a request to undo Item');
        return this._http.post('api/items/undo', itemId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.completeItemById = function (itemId) {
        console.log('service is now making a request to complete Item');
        return this._http.post('api/items/complete', itemId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListingService.prototype.removeItemById = function (itemId) {
        console.log('service is now making a request to complete Item');
        return this._http.post('api/items/remove', itemId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return ListingService;
}());
ListingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ListingService);

var _a;
//# sourceMappingURL=listing.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, items, createdAt, updatedAt) {
        if (_id === void 0) { _id = null; }
        if (username === void 0) { username = ''; }
        if (items === void 0) { items = []; }
        if (createdAt === void 0) { createdAt = new Date(); }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this._id = _id;
        this.username = username;
        this.items = items;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n<h1>{{user.username}}'s page</h1>\n\n<p>This all of {{user.username}}'s items</p>\n<ul>\n  <li *ngFor=\"let item of user.items\">{{item.title}} - {{item.description}}</li>\n</ul>\n\n<ul>\n  <li *ngFor=\"let buser of otherUsers\"><a [routerLink]=\"['/users', buser._id]\">{{buser.username}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listing_service__ = __webpack_require__("../../../../../src/app/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = (function () {
    function UsersComponent(_route, _listingService, _router) {
        this._route = _route;
        this._listingService = _listingService;
        this._router = _router;
        this.otherUsers = [];
        this.allUsers = [];
        this.setCurrentUser();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            console.log('got params id: ' + params.get('uid'));
            return _this._listingService.retrieveUserById(params.get('uid'));
        }).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            if (_this.user.username === _this.currentUser.username) {
                _this._router.navigate(['/dashboard']);
            }
            _this.getAllUsers();
        });
    };
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this._listingService.getUsers()
            .then(function (data) {
            console.log('got then response for get users');
            _this.allUsers = data;
            console.log(_this.allUsers);
            _this.sortUsers(_this.allUsers);
        })
            .catch(function (error) {
            console.log('got catch response for get users');
            console.log(error);
        });
    };
    UsersComponent.prototype.sortUsers = function (users) {
        this.otherUsers = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var buser = users_1[_i];
            if (buser.username !== this.user.username) {
                this.otherUsers.push(buser);
            }
        }
        console.log(this.otherUsers);
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UsersComponent.prototype.setCurrentUser = function () {
        var _this = this;
        this._listingService.getCurrentUser()
            .then(function (data) {
            console.log('got then response');
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
            if (error.status === 401) {
                _this._router.navigate(['']);
            }
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__listing_service__["a" /* ListingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map