exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 4447:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 8533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ token)
/* harmony export */ });
const token = "95d392740f14dbe77294ae764928975d15b2ae7c9fe7df3d727817bffe58";


/***/ }),

/***/ 7344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ useFetcher)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8149);


const useFetcher = (url)=>{
    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(url, (url)=>axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(url).then((response)=>response.data));
    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};


/***/ })

};
;