(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Crypto_application\CryptoCurrencyList\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crypto_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/crypto-api.service */ "qGDz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














function AppComponent_ng_container_12_mat_grid_tile_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const val_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@enterAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](val_r10.exchange);
} }
function AppComponent_ng_container_12_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_ng_container_12_mat_grid_tile_1_span_1_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const val_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r9.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](4, 2, val_r10.price, "1.2-3"));
} }
function AppComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_ng_container_12_mat_grid_tile_1_Template, 5, 5, "mat-grid-tile", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.plotTickr.slice(0, 5));
} }
function AppComponent_ng_container_13_mat_grid_tile_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const val_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@enterAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](val_r14.exchange);
} }
function AppComponent_ng_container_13_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_ng_container_13_mat_grid_tile_1_span_1_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const val_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r13.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](4, 2, val_r14.price, "1.2-3"));
} }
function AppComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_ng_container_13_mat_grid_tile_1_Template, 5, 5, "mat-grid-tile", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.plotTickr.slice(5, 10));
} }
function AppComponent_div_19_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_19_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Market Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_19_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Change (24Hr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_19_mat_expansion_panel_17_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](coin_r21.rank);
} }
function AppComponent_div_19_mat_expansion_panel_17_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 1, coin_r21.marketCap, ctx_r24.language), "");
} }
function AppComponent_div_19_mat_expansion_panel_17_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 1, coin_r21.priceChange1d / 100, "1.2-5"), "");
} }
function AppComponent_div_19_mat_expansion_panel_17_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Currency Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Rank:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Market Cap:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Change (24Hr):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](20, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](coin_r21.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](14, 4, coin_r21.marketCap, ctx_r26.language));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](20, 7, coin_r21.priceChange1d / 100, "1.2-5"));
} }
function AppComponent_div_19_mat_expansion_panel_17_div_23_mat_grid_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const market_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", market_r35.exchange, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", market_r35.pair, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 4, market_r35.price), " ");
} }
function AppComponent_div_19_mat_expansion_panel_17_div_23_mat_paginator_12_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function AppComponent_div_19_mat_expansion_panel_17_div_23_mat_paginator_12_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4); return ctx_r36.changePage($event, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("length", ctx_r34.marketList.length)("pageSize", 10);
} }
function AppComponent_div_19_mat_expansion_panel_17_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Market Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Exchange ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Pair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, AppComponent_div_19_mat_expansion_panel_17_div_23_mat_grid_list_10_Template, 8, 6, "mat-grid-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, AppComponent_div_19_mat_expansion_panel_17_div_23_mat_paginator_12_Template, 1, 2, "mat-paginator", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](11, 3, ctx_r27.marketListFav, ctx_r27.page.p3, ctx_r27.page.p3 + 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r27.marketList.length > 10);
} }
function AppComponent_div_19_mat_expansion_panel_17_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "fetching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "mat-progress-bar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_19_mat_expansion_panel_17_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-expansion-panel", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("opened", function AppComponent_div_19_mat_expansion_panel_17_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r39); const coin_r21 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r38.getMarketsFav(coin_r21.id); })("closed", function AppComponent_div_19_mat_expansion_panel_17_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r40.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-expansion-panel-header", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, AppComponent_div_19_mat_expansion_panel_17_span_5_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_19_mat_expansion_panel_17_Template_mat_icon_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r39); const coin_r21 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r41.removeFromFav(coin_r21); })("click", function AppComponent_div_19_mat_expansion_panel_17_Template_mat_icon_click_13_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-panel-description", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AppComponent_div_19_mat_expansion_panel_17_div_20_Template, 4, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, AppComponent_div_19_mat_expansion_panel_17_div_21_Template, 4, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, AppComponent_div_19_mat_expansion_panel_17_div_22_Template, 21, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, AppComponent_div_19_mat_expansion_panel_17_div_23_Template, 13, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, AppComponent_div_19_mat_expansion_panel_17_div_24_Template, 4, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r20.isScreenLtMedium ? "50%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r20.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r20.isScreenLtMedium ? "100%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", coin_r21.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("alt", coin_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](coin_r21.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", coin_r21.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](19, 15, coin_r21.price, ctx_r20.language), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r20.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r20.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r20.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r20.favFetchStatus === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r20.favFetchStatus !== "done");
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-expansion-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-expansion-panel-header", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, AppComponent_div_19_span_6_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-panel-description", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, AppComponent_div_19_div_15_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, AppComponent_div_19_div_16_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, AppComponent_div_19_mat_expansion_panel_17_Template, 25, 18, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r2.isScreenLtMedium ? "50%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r2.isScreenLtMedium ? "100%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r2.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r2.favoriteArr);
} }
function AppComponent_div_32_span_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_span_6_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r54.sortBy("rank"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, AppComponent_div_32_span_6_mat_icon_2_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, AppComponent_div_32_span_6_mat_icon_3_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r43.rankAsc && ctx_r43.showArr.indexOf("rank") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r43.rankAsc && ctx_r43.showArr.indexOf("rank") !== -1);
} }
function AppComponent_div_32_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_div_19_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_div_19_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r58.sortBy("marketCap"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Market Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, AppComponent_div_32_div_19_mat_icon_3_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, AppComponent_div_32_div_19_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r48.marketAsc && ctx_r48.showArr.indexOf("marketCap") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r48.marketAsc && ctx_r48.showArr.indexOf("marketCap") !== -1);
} }
function AppComponent_div_32_div_20_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_div_20_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r62.sortBy("priceChange1d"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Change (24Hr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, AppComponent_div_32_div_20_mat_icon_3_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, AppComponent_div_32_div_20_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r49.changeAsc && ctx_r49.showArr.indexOf("priceChange1d") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r49.changeAsc && ctx_r49.showArr.indexOf("priceChange1d") !== -1);
} }
function AppComponent_div_32_mat_expansion_panel_21_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](coin_r64.rank);
} }
function AppComponent_div_32_mat_expansion_panel_21_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_mat_expansion_panel_21_mat_icon_13_Template_mat_icon_click_0_listener($event) { return $event.stopPropagation(); })("click", function AppComponent_div_32_mat_expansion_panel_21_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r78); const coin_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r76.addToFav(coin_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("showIcon", !ctx_r67.isScreenLtMedium);
} }
function AppComponent_div_32_mat_expansion_panel_21_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_mat_expansion_panel_21_mat_icon_14_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r81); const coin_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r79.removeFromFav(coin_r64); })("click", function AppComponent_div_32_mat_expansion_panel_21_mat_icon_14_Template_mat_icon_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_mat_expansion_panel_21_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 1, coin_r64.marketCap, ctx_r69.language), "");
} }
function AppComponent_div_32_mat_expansion_panel_21_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 1, coin_r64.priceChange1d / 100, "1.2-5"), "");
} }
function AppComponent_div_32_mat_expansion_panel_21_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Currency Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Rank:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Market Cap:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Change (24Hr):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](20, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](coin_r64.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](14, 4, coin_r64.marketCap, ctx_r71.language));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](20, 7, coin_r64.priceChange1d / 100, "1.2-5"));
} }
function AppComponent_div_32_mat_expansion_panel_21_div_23_mat_grid_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const market_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", market_r88.exchange, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", market_r88.pair, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 4, market_r88.price), " ");
} }
function AppComponent_div_32_mat_expansion_panel_21_div_23_mat_paginator_12_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function AppComponent_div_32_mat_expansion_panel_21_div_23_mat_paginator_12_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4); return ctx_r89.changePage($event, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("length", ctx_r87.marketList.length)("pageSize", 10);
} }
function AppComponent_div_32_mat_expansion_panel_21_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Market Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-grid-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Exchange ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Pair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-grid-tile", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, AppComponent_div_32_mat_expansion_panel_21_div_23_mat_grid_list_10_Template, 8, 6, "mat-grid-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, AppComponent_div_32_mat_expansion_panel_21_div_23_mat_paginator_12_Template, 1, 2, "mat-paginator", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](11, 3, ctx_r72.marketList, ctx_r72.page.p2, ctx_r72.page.p2 + 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r72.marketList.length > 10);
} }
function AppComponent_div_32_mat_expansion_panel_21_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "fetching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "mat-progress-bar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_div_32_mat_expansion_panel_21_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-expansion-panel", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("opened", function AppComponent_div_32_mat_expansion_panel_21_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r92); const coin_r64 = ctx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r91.getMarkets(coin_r64.id); })("closed", function AppComponent_div_32_mat_expansion_panel_21_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r93.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-expansion-panel-header", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, AppComponent_div_32_mat_expansion_panel_21_span_5_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, AppComponent_div_32_mat_expansion_panel_21_mat_icon_13_Template, 2, 2, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, AppComponent_div_32_mat_expansion_panel_21_mat_icon_14_Template, 2, 0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-panel-description", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AppComponent_div_32_mat_expansion_panel_21_div_20_Template, 4, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, AppComponent_div_32_mat_expansion_panel_21_div_21_Template, 4, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, AppComponent_div_32_mat_expansion_panel_21_div_22_Template, 21, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, AppComponent_div_32_mat_expansion_panel_21_div_23_Template, 13, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, AppComponent_div_32_mat_expansion_panel_21_div_24_Template, 4, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const coin_r64 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r50.isScreenLtMedium ? "50%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r50.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r50.isScreenLtMedium ? "100%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", coin_r64.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("alt", coin_r64.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](coin_r64.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", coin_r64.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r50.favoriteArrId.length < 3 && ctx_r50.favoriteArrId.indexOf(coin_r64.id) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r50.favoriteArrId.indexOf(coin_r64.id) !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](19, 17, coin_r64.price, ctx_r50.language), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r50.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r50.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r50.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r50.fetchStatus === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r50.fetchStatus !== "done");
} }
function AppComponent_div_32_mat_paginator_23_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function AppComponent_div_32_mat_paginator_23_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r94.changePage($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("length", ctx_r51.coins.length)("pageSize", 10);
} }
function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-expansion-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-expansion-panel-header", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, AppComponent_div_32_span_6_Template, 4, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_Template_p_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r96.sortBy("symbol"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, AppComponent_div_32_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, AppComponent_div_32_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-panel-description", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_div_32_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r98.sortBy("price"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, AppComponent_div_32_mat_icon_17_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, AppComponent_div_32_mat_icon_18_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, AppComponent_div_32_div_19_Template, 5, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AppComponent_div_32_div_20_Template, 5, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, AppComponent_div_32_mat_expansion_panel_21_Template, 25, 20, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](22, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, AppComponent_div_32_mat_paginator_23_Template, 1, 2, "mat-paginator", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r3.isScreenLtMedium ? "50%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r3.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", ctx_r3.isScreenLtMedium ? "100%" : "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.nameAsc && ctx_r3.showArr.indexOf("symbol") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r3.nameAsc && ctx_r3.showArr.indexOf("symbol") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.priceAsc && ctx_r3.showArr.indexOf("price") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r3.priceAsc && ctx_r3.showArr.indexOf("price") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r3.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r3.isScreenLtMedium);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](22, 13, ctx_r3.coins, ctx_r3.page.p1, ctx_r3.page.p1 + 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.coins.length > 10);
} }
function AppComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "mat-spinner", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_ng_template_36_button_0_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_ng_template_36_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_ng_template_36_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r103); const lang_r100 = ctx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r102.setFiat(lang_r100.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, AppComponent_ng_template_36_button_0_mat_icon_5_Template, 2, 0, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const lang_r100 = ctx.$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", lang_r100.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](lang_r100.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", lang_r100.name === ctx_r99.language);
} }
function AppComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, AppComponent_ng_template_36_button_0_Template, 6, 3, "button", 54);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r6.fiatsArr);
} }
function AppComponent_ng_template_39_button_0_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_ng_template_39_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_ng_template_39_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r109); const i_r106 = ctx.index; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r108.setTickr(i_r106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, AppComponent_ng_template_39_button_0_mat_icon_5_Template, 2, 0, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const lang_r105 = ctx.$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", lang_r105.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](lang_r105.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", lang_r105.symbol === ctx_r104.tickrSymbol);
} }
function AppComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, AppComponent_ng_template_39_button_0_Template, 6, 3, "button", 54);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r8.tickrArr);
} }
class AppComponent {
    constructor(cryptoSrv) {
        this.cryptoSrv = cryptoSrv;
        this.coins = [];
        this.marketList = [];
        this.marketListFav = [];
        this.columnsToDisplay = ['rank', 'name', 'price', 'marketCap'];
        this.favoriteArr = [];
        this.favoriteArrId = [];
        this.fiatsArr = [];
        this.plotTickr = [];
        this.tickrArr = [];
        this.rankAsc = false;
        this.nameAsc = false;
        this.priceAsc = false;
        this.isFirst = true;
        this.marketAsc = false;
        this.changeAsc = false;
        this.showValues = [];
        this.page = {
            p1: 0,
            p2: 0,
            p3: 0,
        };
        this.showArr = ['rank'];
        this.language = 'INR';
        this.tickrSymbol = 'BTC';
        this.fetchStatus = 'fetching';
        this.favFetchStatus = 'fetching';
        this.mainStatus = 'fetching';
        this.isScreenLtMedium = false;
    }
    ngOnInit() {
        this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
        this.onWindowResize();
        this.getCoinsList('INR');
        this.getFiats();
        setInterval(() => {
            this.isFirst = !this.isFirst;
        }, 4500);
    }
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        if (this.getScreenWidth <= 850) {
            this.isScreenLtMedium = true;
        }
        else {
            this.isScreenLtMedium = false;
        }
        this.breakpoint = this.isScreenLtMedium ? 1 : 6;
    }
    getFiats() {
        this.fiatSubscription = this.cryptoSrv.getFiats().subscribe((res) => {
            this.fiatsArr = res;
        });
    }
    getCoinsList(fiatCode) {
        this.mainStatus = 'fetching';
        this.favoriteArr = [];
        this.coinsSubscription = this.cryptoSrv
            .getCoinsList(fiatCode)
            .subscribe((res) => {
            this.coins = res.coins;
            this.tickrArr = this.coins.slice(0, 3);
            this.getTickrValues();
            if (this.favoriteArrId.length > 0) {
                this.favoriteArr = [];
                const temp = this.coins.filter((coin) => this.favoriteArrId.indexOf(coin.id) !== -1);
                this.favoriteArr = temp;
            }
            this.mainStatus = 'done';
        });
    }
    getTickrValues() {
        this.showValues = [];
        this.tickrArr.forEach((tkr) => {
            this.tickrSbscription = this.cryptoSrv
                .getMarkets(tkr.id)
                .subscribe((res) => {
                this.showValues.push(res.splice(0, 10));
                this.plotTickr = this.showValues[0];
            });
        });
    }
    getMarkets(coinId) {
        this.fetchStatus = 'fetching';
        this.marketSubscription = this.cryptoSrv
            .getMarkets(coinId)
            .subscribe((res) => {
            this.marketList = res;
            this.fetchStatus = 'done';
        });
    }
    getMarketsFav(coinId) {
        this.favFetchStatus = 'fetching';
        this.favSubscription = this.cryptoSrv
            .getMarkets(coinId)
            .subscribe((res) => {
            this.marketListFav = res;
            this.favFetchStatus = 'done';
        });
    }
    addToFav(coin) {
        this.favoriteArr = this.favoriteArr.filter((cn) => cn.id !== coin.id);
        this.favoriteArrId = this.favoriteArrId.filter((cn) => cn !== coin.id);
        this.favoriteArr.push(coin);
        this.favoriteArrId.push(coin.id);
        var element = document.getElementById('favId');
        setTimeout(() => {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            });
        });
    }
    removeFromFav(coin) {
        this.favoriteArr = this.favoriteArr.filter((cn) => cn.id !== coin.id);
        this.favoriteArrId = this.favoriteArrId.filter((cn) => cn !== coin.id);
    }
    setFiat(fiatCode) {
        this.fiatsArr.forEach((fiat) => {
            if (fiat.name === fiatCode) {
                this.language = fiat.name;
            }
        });
        this.nameAsc = false;
        this.rankAsc = false;
        this.priceAsc = false;
        this.marketAsc = false;
        this.changeAsc = false;
        this.showArr = [];
        this.showArr.push('rank');
        this.getCoinsList(fiatCode);
        this.tickrSymbol = 'BTC';
    }
    setTickr(ind) {
        this.plotTickr = this.showValues[ind];
        this.tickrSymbol = this.tickrArr[ind].symbol;
    }
    sortBy(sortType) {
        this.showArr = [];
        this.showArr.push(sortType);
        switch (sortType) {
            case 'rank':
                this.sortLogic(sortType, this.rankAsc);
                this.rankAsc = !this.rankAsc;
                this.nameAsc = false;
                this.priceAsc = false;
                this.marketAsc = false;
                this.changeAsc = false;
                break;
            case 'symbol':
                this.sortLogic(sortType, this.nameAsc);
                this.nameAsc = !this.nameAsc;
                this.rankAsc = false;
                this.priceAsc = false;
                this.marketAsc = false;
                this.changeAsc = false;
                break;
            case 'price':
                this.sortLogic(sortType, this.priceAsc);
                this.priceAsc = !this.priceAsc;
                this.nameAsc = false;
                this.rankAsc = false;
                this.marketAsc = false;
                this.changeAsc = false;
                break;
            case 'marketCap':
                this.sortLogic(sortType, this.marketAsc);
                this.marketAsc = !this.marketAsc;
                this.nameAsc = false;
                this.priceAsc = false;
                this.rankAsc = false;
                this.changeAsc = false;
                break;
            case 'priceChange1d':
                this.sortLogic(sortType, this.changeAsc);
                this.changeAsc = !this.changeAsc;
                this.nameAsc = false;
                this.priceAsc = false;
                this.marketAsc = false;
                this.rankAsc = false;
                break;
            default:
                break;
        }
    }
    sortLogic(sortType, boolVal) {
        if (boolVal) {
            this.coins.sort((a, b) => (a[sortType] > b[sortType] ? 1 : -1));
        }
        else {
            this.coins.sort((a, b) => (a[sortType] < b[sortType] ? 1 : -1));
        }
    }
    changePage(event, ind) {
        if (ind === 1) {
            this.page.p1 = event.pageIndex * 10;
        }
        else if (ind === 2) {
            this.page.p2 = event.pageIndex * 10;
        }
        else if (ind === 3) {
            this.page.p3 = event.pageIndex * 10;
        }
    }
    ngOnDestroy() {
        this.fiatSubscription.unsubscribe();
        this.fiatSubscription.unsubscribe();
        this.coinsSubscription.unsubscribe();
        this.tickrSbscription.unsubscribe();
        this.marketSubscription.unsubscribe();
        this.favSubscription.unsubscribe();
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_crypto_api_service__WEBPACK_IMPORTED_MODULE_2__["CryptoApiService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveWindow"]);
    } }, decls: 40, vars: 17, consts: [["color", "primary"], ["rowHeight", "32px", 3, "cols"], ["matTooltip", "Select Tickr", "mat-button", "", 1, "tickrBtn", 3, "matMenuTriggerFor"], [4, "ngIf"], ["id", "favId", 3, "hidden"], [1, "heading1"], [2, "font-size", "small", "margin-left", "32px"], [2, "text-align", "end", "margin-right", "32px"], [2, "font-weight", "400"], ["matTooltip", "Select FIAT", "mat-button", "", 1, "fiatBtn", 3, "matMenuTriggerFor"], ["fiat", "matMenu"], ["matMenuContent", ""], ["tickr", "matMenu"], [4, "ngFor", "ngForOf"], ["style", "font-weight: 500; font-size: small", 4, "ngIf"], [1, "margin-left-xs", 2, "font-size", "x-small"], [2, "font-weight", "500", "font-size", "small"], ["disabled", ""], [1, "expansionHeader"], [2, "display", "flex", "width", "100%"], ["style", "width: 20%; color: black", 4, "ngIf"], [2, "display", "flex"], [1, "margin-left-xs"], [2, "margin-bottom", "0px", "color", "black"], [2, "justify-content", "space-between", "width", "60%", "color", "black"], [2, "margin-bottom", "0px", "width", "33.33%"], ["style", "margin-bottom: 0px; width: 33.33%", 4, "ngIf"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [2, "width", "20%", "color", "black"], [3, "opened", "closed"], ["panelH", ""], ["style", "width: 20%", 4, "ngIf"], ["width", "24", "height", "24", 3, "src", "alt"], [2, "margin-bottom", "0px"], [2, "margin-bottom", "0px", "font-size", "small"], ["color", "primary", "matTooltip", "Remove from Favorites", 3, "click"], [2, "justify-content", "space-between", "width", "60%"], [2, "width", "20%"], [2, "background", "#3f51b5", "color", "white"], [1, "margin-top-xs"], ["rowHeight", "32px", 3, "cols", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "page", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "page"], ["mode", "indeterminate"], ["style", "width: 20%; color: black; cursor: pointer", "class", "noSelection", 3, "click", 4, "ngIf"], [1, "noSelection", 2, "margin-bottom", "0px", "color", "black", "cursor", "pointer", 3, "click"], [2, "margin-bottom", "0px", "width", "33.33%", "cursor", "pointer", 3, "click"], [1, "noSelection"], ["style", "margin-bottom: 0px; width: 33.33%; cursor: pointer", 3, "click", 4, "ngIf"], [1, "noSelection", 2, "width", "20%", "color", "black", "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Add to Favorites", 3, "showIcon", "click", 4, "ngIf"], ["color", "primary", "matTooltip", "Remove from Favorites", 3, "click", 4, "ngIf"], ["color", "primary", "matTooltip", "Add to Favorites", 3, "click"], [2, "margin", "auto", "justify-content", "center"], ["mat-menu-item", "", "style", "display: flex; justify-content: space-between", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 2, "display", "flex", "justify-content", "space-between", 3, "click"], [2, "width", "100%", "display", "flex", "justify-content", "center", "text-align", "center", "align-items", "center"], [1, "img", 3, "src"], [2, "margin-left", "0.5rem"], ["style", "margin-left: 0.5rem", 4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "CryptoCurrency List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](9, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, AppComponent_ng_container_12_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, AppComponent_ng_container_13_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " * Select upto 3 Cryptocurrencies as favorites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, AppComponent_div_19_Template, 18, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "List of Cryptocurrencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Select FIAT currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](29, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, AppComponent_div_32_Template, 24, 17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, AppComponent_div_33_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](36, AppComponent_ng_template_36_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, AppComponent_ng_template_39_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](35);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("tickr", !ctx.isScreenLtMedium);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cols", ctx.breakpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matMenuTriggerFor", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](9, 13, ctx.tickrSymbol));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isFirst);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.isFirst);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx.favoriteArr.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.favoriteArr.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](29, 15, ctx.language));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.mainStatus === "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.mainStatus !== "done");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"]], styles: [".heading1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 8px 32px 8px 32px;\n}\n\n.panelTitle[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.expansionHeader[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.showIcon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:hover   .showIcon[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fiatBtn[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #cecece;\n  padding-left: 0.5rem;\n  padding-right: 0;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 20px;\n  padding-right: 5px;\n}\n\n.noSelection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  -webkit-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: #dff7ff;\n}\n\n.tickrBtn[_ngcontent-%COMP%] {\n  border: 1px solid #cecece;\n  padding-left: 0.5rem;\n  padding-right: 0;\n  width: 100%;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.margin-left-xs[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.margin-top-xs[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.tickr[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0;\n  z-index: 1 !important;\n}\n\n.fontBlack[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUZFO0VBQ0UsY0FBQTtBQUtKOztBQUZBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUxBO0VBQ0UsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQkFBQTtBQVlGOztBQVZBO0VBQ0UsMkJBQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7QUFhRjs7QUFYQTtFQUNFLHVCQUFBO0FBY0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtYXJnaW46IDhweCAzMnB4IDhweCAzMnB4O1xyXG59XHJcbi5wYW5lbFRpdGxlIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5leHBhbnNpb25IZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4uc2hvd0ljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWw6aG92ZXIge1xyXG4gIC5zaG93SWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLmZpYXRCdG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4ubm9TZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjMsIDI0NywgMjU1KTtcclxufVxyXG4udGlja3JCdG4ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udy1mdWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWFyZ2luLWxlZnQteHMge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLm1hcmdpbi10b3AteHMge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLnRpY2tyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG4uZm9udEJsYWNrIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"]] }); })();


/***/ }),

/***/ "qGDz":
/*!************************************************!*\
  !*** ./src/app/services/crypto-api.service.ts ***!
  \************************************************/
/*! exports provided: CryptoApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoApiService", function() { return CryptoApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


const commonPrefix = `https://api.coinstats.app/public/v1`;
const cryptoEndPoints = {
    GET_COINS: `${commonPrefix}/coins`,
    // GET_COIN:`${commonPrefix}/coins`,
    GET_PRICE_CHART: `${commonPrefix}/charts`,
    GET_EXCHANGES: `${commonPrefix}/exchanges`,
    GET_MARKETS: `${commonPrefix}/markets`,
    GET_TICKERS: `${commonPrefix}/tickers`,
    GET_FIATS: `${commonPrefix}/fiats`,
    GET_NEWS: `${commonPrefix}/news`,
};
class CryptoApiService {
    constructor(http) {
        this.http = http;
    }
    getCoinsList(currency) {
        if (currency) {
            return this.http.get(`${cryptoEndPoints.GET_COINS}?currency=${currency}`);
        }
        return this.http.get(`${cryptoEndPoints.GET_COINS}`);
    }
    getMarkets(coin) {
        return this.http.get(`${cryptoEndPoints.GET_MARKETS}?coinId=${coin}`);
    }
    getFiats() {
        return this.http.get(`${cryptoEndPoints.GET_FIATS}`);
    }
}
CryptoApiService.??fac = function CryptoApiService_Factory(t) { return new (t || CryptoApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CryptoApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CryptoApiService, factory: CryptoApiService.??fac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map