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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-navbar></app-search-navbar>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'github-search';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _github_service_github_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-service/github.service */ "./src/app/github-service/github.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_navbar_search_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-navbar/search-navbar.component */ "./src/app/search-navbar/search-navbar.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _search_navbar_search_navbar_component__WEBPACK_IMPORTED_MODULE_7__["GitsearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_github_service_github_service__WEBPACK_IMPORTED_MODULE_5__["GitsearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/github-service/github.service.ts":
/*!**************************************************!*\
  !*** ./src/app/github-service/github.service.ts ***!
  \**************************************************/
/*! exports provided: GitsearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitsearchService", function() { return GitsearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//import 'rxjs/add/operator/map';
var GitsearchService = /** @class */ (function () {
    function GitsearchService(http) {
        this.http = http;
        this.clientid = '75fbc3436ae7b2cacc1c';
        this.clientsecret = '3865052f662ff45e88db544725eedad0c1424758';
        console.log("service works");
        this.username = 'raymondyegon';
    }
    GitsearchService.prototype.getProfileDesc = function () {
        return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
    };
    GitsearchService.prototype.getProfileRepos = function () {
        return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
    };
    GitsearchService.prototype.updateProfile = function (username) {
        this.username = username;
    };
    GitsearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GitsearchService);
    return GitsearchService;
}());



/***/ }),

/***/ "./src/app/search-navbar/search-navbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-navbar/search-navbar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1uYXZiYXIvc2VhcmNoLW5hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-navbar/search-navbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-navbar/search-navbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-dark\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark bg-inverse pull-xs-right\">\n      <a class=\"navbar-brand\" href=\"#\">Home</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse text-right \" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"www.github.com/raymondyegon\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i>Github</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"www.twitter.com/login\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>Twitter</a>\n          </li>\n        </ul>\n\n\n      </div>\n    </nav>\n  </div>\n</div>\n\n<div class=\"jumbotron\">\n  <form class=\"text-center\">\n    <label for=\"search\" class=\"sr-only\">Search by Name:</label>\n    <input type=\"text\" class=\"form-group mx-sm-3 mb-2\" placeholder=\"Enter github username\" [(ngModel)]=\"username\"\n      name=\"username\" (keyup)=\"findProfile()\">\n    <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\" (keyup)=\"findProfile()\">Search</button>\n  </form>\n</div>\n\n<div class=\"container\">\n  <div *ngIf=\"profile\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        {{profile.name}} <small>({{profile.login}})</small>\n        <span *ngIf=\"profile.company\">, Works for {{profile.company}}</span>\n        {{profile.location}}\n      </div>\n      <br><br>\n      <div class=\"\">\n        <div class=\"row\">\n          <div class=\"\">\n\n            <img src=\"{{profile.avatar_url}}\" class=\"img- img-responsive\" alt=\"Profile Picture\">\n\n          </div>\n          <div class=\"col-sm-4\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-items\" *ngIf=\"profile.bio\">{{profile.bio}}</li>\n              <li class=\"list-group-items\" *ngIf=\"profile.hireable\">{{profile.hireable}}</li>\n              <li class=\"list-group-items\" *ngIf=\"profile.blog\"><a href=\"{{profile.blog}}\"\n                  target=\"_blank\">{{profile.blog}}</a></li>\n              <li class=\"list-group-items\" *ngIf=\"profile.email\"><a href=\"emailto:{{profile.email}}\"\n                  target=\"_blank\">{{profile.email}}</a></li>\n\n            </ul>\n\n          </div>\n          <div class=\"\">\n            <div>\n              <p>\n                <span class=\"label label-default\">Followers: {{profile.followers}}.</span>\n                <span class=\"label label-default\"> Following: {{profile.following}}.</span>\n                <span class=\"label label-default\"> Public Gists: {{profile.public_gists}}.</span>\n                <span class=\"label label-default\">Public Repositories: {{profile.public_repos}}.</span>\n              </p>\n              <p><a href=\"{{profile.html_url}}\" target=\"_blank\" class=\"btn btn-primary btn-sm\">Navigate to github\n                  profile</a></p>\n\n\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h3 class=\"panel-title\">Repositories</h3>\n                </div>\n                <div class=\"panel-body\" *ngFor=\"let repo of repos\">\n                  <p class=\"clearfix\">\n                    {{repo.name}} <a href=\"{{repo.html_url}}\" class=\"btn btn-sm btn-secondary pull-right\"\n                      target=\"_blank\">Check out Project</a>\n\n                  </p>\n                  <p>{{repo.description}}</p>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-navbar/search-navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-navbar/search-navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: GitsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitsearchComponent", function() { return GitsearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../github-service/github.service */ "./src/app/github-service/github.service.ts");



var GitsearchComponent = /** @class */ (function () {
    function GitsearchComponent(gitsearchService) {
        this.gitsearchService = gitsearchService;
    }
    GitsearchComponent.prototype.findProfile = function () {
        var _this = this;
        this.gitsearchService.updateProfile(this.username);
        this.gitsearchService.getProfileDesc().subscribe(function (profile) {
            console.log(profile);
            _this.profile = profile;
        });
        this.gitsearchService.getProfileRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    GitsearchComponent.prototype.ngOnInit = function () {
    };
    GitsearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-navbar',
            template: __webpack_require__(/*! ./search-navbar.component.html */ "./src/app/search-navbar/search-navbar.component.html"),
            styles: [__webpack_require__(/*! ./search-navbar.component.css */ "./src/app/search-navbar/search-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_service_github_service__WEBPACK_IMPORTED_MODULE_2__["GitsearchService"]])
    ], GitsearchComponent);
    return GitsearchComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ray/Documents/moringa/angular/github-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map