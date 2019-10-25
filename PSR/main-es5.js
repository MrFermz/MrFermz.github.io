var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color:darkslategrey; padding:0px;\">\n  <div class=\"container\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/game']\">PLAY</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/score']\">SCORE</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand navbar-dark\" style=\"background-color:darkslategrey; padding:0px;\">\n  <div class=\"container\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/score']\">SCORE</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <!-- CPU -->\n  <div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"d-flex justify-content-center\" *ngFor=\"let item of hand_cpu_list; let i = index\"\n      style=\"text-align: center;\">\n      <span *ngIf=\"played == 1;else tempPlayed\">\n        <div class=\"btn btn2\" [ngStyle]=\"card_visible\">\n          <img class=\"custom\" src=\"../../assets/cards/behide.jpg\">\n        </div>\n      </span>\n      <ng-template #tempPlayed>\n        <span *ngIf=\"item == hand_cpu;else tempHide\">\n          <div class=\"btn btn2 scale\" [ngStyle]=\"card_visible\">\n            <img class=\"custom\" src=\"../../assets/cards/{{item}}.jpg\">\n          </div>\n        </span>\n        <ng-template #tempHide>\n          <div class=\"btn btn2\" [ngStyle]=\"card_visible\">\n            <img class=\"custom\" src=\"../../assets/cards/{{item}}.jpg\" style=\"opacity: 50%;\">\n          </div>\n        </ng-template>\n      </ng-template>\n    </div>\n  </div>\n\n  <!-- Middle -->\n  <hr>\n  <div class=\"row\" style=\"background-color: white;\">\n    <h1 class=\"col label1\">\n      {{result}}\n    </h1>\n    <div [ngStyle]=\"over\" class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\"></div>\n        <div class=\"col\">\n          <p>Name: {{username}}</p>\n          <p>Score: {{player_score}}</p>\n          <form>\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" id=\"Username\" name=\"username\"\n                placeholder=\"Enter your name.\" required>\n            </div>\n            <button type=\"submit\" (click)=\"onSave(username, player_score);\" class=\"btn btn-primary btn-block\">Save\n              Score</button>\n            <button type=\"button\" (click)=\"reset();\" class=\"btn btn-secondary btn-block\">Reset</button>\n          </form>\n        </div>\n        <div class=\"col\"></div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n  <!-- Player -->\n  <div class=\"row\" [ngStyle]=\"card_visible\">\n    <h4 class=\"col label2\">\n      Score: {{player_score}} | Next in: {{count}}\n    </h4>\n  </div>\n  <div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"d-flex justify-content-center\" *ngFor=\"let item of hands\">\n      <span *ngIf=\"played == 1;else tempDisable\">\n        <div class=\"btn btn2\" (click)=\"Compare(item);onSelected(item)\" [ngStyle]=\"card_visible\">\n          <img class=\"custom\" src=\"../../assets/cards/{{item}}.jpg\">\n        </div>\n      </span>\n      <ng-template #tempDisable>\n        <span *ngIf=\"item == selected;else tempNoneSelect\">\n          <div class=\"btn btn2 scale\" [ngStyle]=\"card_visible\">\n            <img class=\"custom\" src=\"../../assets/cards/{{item}}.jpg\">\n          </div>\n        </span>\n        <ng-template #tempNoneSelect>\n          <div class=\"btn btn2\" [ngStyle]=\"card_visible\">\n            <img class=\"custom\" src=\"../../assets/cards/{{item}}.jpg\" style=\"opacity: 50%;\">\n          </div>\n        </ng-template>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col\">\n      <form style=\"margin-top: 320px;\">\n        <button type=\"button\" (click)=\"onLogin();\" class=\"btn btn-primary btn-block\">PLAY</button>\n        <button type=\"button\" (click)=\"onScore();\" class=\"btn btn-secondary btn-block\">SCORE</button>\n      </form>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin:20px;\"></div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h3>Member list.</h3>\n    </div>\n    <div class=\"col-6\" style=\"text-align: right\">\n      <button type=\"button\" (click)=\"registerModal.show()\" class=\"btn btn-primary\">REGISTER</button>\n    </div>\n  </div>\n  <table class=\"table table-hover\" style=\"margin-top: 8px;\">\n    <thead>\n      <tr>\n        <th scope=\"col\" style=\"width:30px;\">#</th>\n        <th scope=\"col\" style=\"width:220px;\">Name</th>\n        <th scope=\"col\">Department</th>\n        <th scope=\"col\" style=\"width:220px;\">E-mail</th>\n        <th scope=\"col\" style=\"width:150px;\">Mobile</th>\n        <th scope=\"col\" style=\"width:150px; text-align:center;\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let item of items; let i = index\">\n        <th style=\"padding-top:8px; padding-bottom:6px;\" scope=\"row\">{{i+1}}.</th>\n        <td style=\"padding-top:8px; padding-bottom:6px;\">{{item.mem_fname}} {{item.mem_lname}}</td>\n        <td style=\"padding-top:8px; padding-bottom:6px;\">Information Technology</td>\n        <td style=\"padding-top:8px; padding-bottom:6px;\">{{item.mem_email}}</td>\n        <td style=\"padding-top:8px; padding-bottom:6px;\">{{item.mem_phone}}</td>\n        <td style=\"padding-top:6px; padding-bottom:6px; text-align:center;\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button (click)=\"editModal.show()\" type=\"button\" class=\"btn btn-sm btn-info\">Edit</button>\n            <button (click)=\"onDelete(item)\" type=\"button\" class=\"btn btn-sm btn-secondary\">Delete</button>\n          </div>\n\n          <!-- Edit Modal -->\n          <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog modal-lg\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\">MEMBER EDIT ({{item.mem_id}})</h5>\n                  <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" data-dismiss=\"modal\"\n                    aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\" style=\"text-align: left\">\n\n                  <div class=\"alert alert-warning\" role=\"alert\" [ngStyle]=\"alertStyle\">\n                    กรุณาป้อน ชื่อ นามสกุล เบอร์โทร และอีเมล\n                  </div>\n                  <!-- <form> -->\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"Firstname\">ชื่อ {{ firstname }}</label>\n                      <input [(ngModel)]=\"item.mem_fname\" onclick=\"this.select()\" [ngStyle]=\"textWarning\" type=\"text\"\n                        class=\"form-control\" id=\"Firstname\" placeholder=\"Firstname\" required>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"Lastname\">นามสกุล {{ lastname }}</label>\n                      <input [(ngModel)]=\"item.mem_lname\" onclick=\"this.select()\" [ngStyle]=\"textWarning\" type=\"text\"\n                        class=\"form-control\" id=\"Lastname\" placeholder=\"Lastname\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"Telephone\">เบอร์โทร {{ phone }}</label>\n                      <input [(ngModel)]=\"item.mem_phone\" onclick=\"this.select()\" [ngStyle]=\"textWarning\" type=\"text\"\n                        class=\"form-control\" id=\"Telephone\" placeholder=\"Telephone\" required>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"Email\">อีเมล์ {{ email }}</label>\n                      <input [(ngModel)]=\"item.mem_email\" onclick=\"this.select()\" [ngStyle]=\"textWarning\" type=\"email\"\n                        class=\"form-control\" id=\"Email\" placeholder=\"Email\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"inputAddress\">ที่อยู่ {{ address }}</label>\n                    <textarea [(ngModel)]=\"item.mem_address\" onclick=\"this.select()\" class=\"form-control\"\n                      id=\"inputAddress\" placeholder=\"Address\" required></textarea>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"Skill\">ความสามารถพิเศษ {{ skill }}</label>\n                    <select [(ngModel)]=\"item.mem_skill\" class=\"form-control\" id=\"Skill\">\n                      <option [ngValue]=\"Skill\" selected>{{item.mem_skill}}</option>\n                      <option *ngFor=\"let item of mySkill\" [ngValue]=\"item\">\n                        {{ item }}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-2\">\n                      <span *ngIf=\"btnUpdate == 1;else tempUpdate\">\n                        <button type=\"button\" (click)=\"onUpdate(item)\" class=\"btn btn-primary btn-block\">Update</button>\n                      </span>\n                      <ng-template #tempUpdate>\n                        <button type=\"button\" (click)=\"onUpdate(item); editModal.hide()\"\n                          class=\"btn btn-primary btn-block\">Update</button>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group col-md-2\">\n                      <button type=\"button\" (click)=\"onCancel(); editModal.hide()\"\n                        class=\"btn btn-secondary btn-block\">Cencel</button>\n                    </div>\n                  </div>\n                  <!-- </form> -->\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<!-- Register Modal -->\n<div bsModal #registerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">REGISTER</h5>\n        <button type=\"button\" class=\"close\" (click)=\"registerModal.hide()\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: left\">\n\n        <div class=\"alert alert-warning\" role=\"alert\" [ngStyle]=\"alertStyle\">\n          กรุณาป้อน ชื่อ นามสกุล เบอร์โทร และอีเมล\n        </div>\n\n        <!-- <form> -->\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"Firstname\">ชื่อ {{ firstname }}</label>\n            <input [(ngModel)]=\"firstname\" [ngStyle]=\"textWarning\" type=\"text\" class=\"form-control\" id=\"Firstname\"\n              placeholder=\"Firstname\" required>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"Lastname\">นามสกุล {{ lastname }}</label>\n            <input [(ngModel)]=\"lastname\" [ngStyle]=\"textWarning\" type=\"text\" class=\"form-control\" id=\"Lastname\"\n              placeholder=\"Lastname\" required>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"Telephone\">เบอร์โทร {{ phone }}</label>\n            <input [(ngModel)]=\"phone\" [ngStyle]=\"textWarning\" type=\"text\" class=\"form-control\" id=\"Telephone\"\n              placeholder=\"Telephone\" required>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"Email\">อีเมล์ {{ email }}</label>\n            <input [(ngModel)]=\"email\" [ngStyle]=\"textWarning\" type=\"email\" class=\"form-control\" id=\"Email\"\n              placeholder=\"Email\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress\">ที่อยู่ {{ address }}</label>\n          <textarea [(ngModel)]=\"address\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Address\"\n            required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Skill\">ความสามารถพิเศษ {{ skill }}</label>\n          <select [(ngModel)]=\"skill\" class=\"form-control\" id=\"Skill\">\n            <option [ngValue]=\"Skill\" selected>Skill</option>\n            <option *ngFor=\"let item of mySkill\" [ngValue]=\"item\">\n              {{ item }}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-2\">\n            <span *ngIf=\"btnSubmit == 1;else tempSubmit\">\n              <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-primary btn-block\">บันทึก</button>\n            </span>\n            <ng-template #tempSubmit>\n              <button type=\"button\" (click)=\"onSubmit(); registerModal.hide()\"\n                class=\"btn btn-primary btn-block\">บันทึก</button>\n            </ng-template>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-secondary btn-block\">ยกเลิก</button>\n          </div>\n        </div>\n        <!-- </form> -->\n\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/score/score.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score/score.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand navbar-dark\" style=\"background-color:darkslategrey; padding:0px;\">\n  <div class=\"container\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/game']\">PLAY</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
            /* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score/score.component */ "./src/app/score/score.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
                { path: 'score', component: _score_score_component__WEBPACK_IMPORTED_MODULE_5__["ScoreComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".title{\n    text-align: center;\n    font-size: 18pt;\n    padding: 2px;\n    margin-top: 20px;\n}\n.brand-icon{\n    font-size: 33pt;\n    color: rgb(255, 255, 255);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB0O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJyYW5kLWljb257XG4gICAgZm9udC1zaXplOiAzM3B0O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
            /* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./score/score.component */ "./src/app/score/score.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _member_member_component__WEBPACK_IMPORTED_MODULE_8__["MemberComponent"],
                        _game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"],
                        _score_score_component__WEBPACK_IMPORTED_MODULE_11__["ScoreComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot()
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/game/game.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/game/game.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".custom{\r\n  border-radius: 5px;\r\n  width: 120%;\r\n}\r\n\r\n.btn2{\r\n  padding: 0;\r\n  margin: 10px 25px 10px 25px;\r\n  transition: transform .3s;\r\n}\r\n\r\n.btn2:hover{\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.scale{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.label1{\r\n  text-align: center;\r\n  margin: 10px 10px;\r\n  color: chocolate;\r\n}\r\n\r\n.label2{\r\n  text-align: center;\r\n  margin: 10px 10px;\r\n  }\r\n\r\n.hr{\r\n  width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUUzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCOztBQUVGO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9te1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTIwJTtcclxufVxyXG5cclxuLmJ0bjJ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDEwcHggMjVweCAxMHB4IDI1cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XHJcbn1cclxuXHJcbi5idG4yOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zY2FsZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5sYWJlbDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIGNvbG9yOiBjaG9jb2xhdGU7XHJcbn1cclxuXHJcbi5sYWJlbDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbi5ocntcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/game/game.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/game/game.component.ts ***!
          \****************************************/
        /*! exports provided: GameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function () { return GameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var GameComponent = /** @class */ (function () {
                function GameComponent(route, router) {
                    this.route = route;
                    this.router = router;
                    this.hand = ['Paper', 'Scissors', 'Rock'];
                    this.hands = ['Paper', 'Scissors', 'Rock'];
                    this.result = 'Select your card.';
                    this.player_score = 0;
                    this.played = 1;
                    this.card_visible = {
                        'display': 'block'
                    };
                    this.over = {
                        'display': 'none'
                    };
                }
                GameComponent.prototype.shuffle = function (a) {
                    var _a;
                    for (var i = a.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
                    }
                    return a;
                };
                GameComponent.prototype.CPU = function () {
                    this.count = 'ready';
                    this.hand_shuffle = this.shuffle(this.hand);
                    this.hand_cpu_list = [this.hand_shuffle[1], this.hand_shuffle[0], this.hand_shuffle[2]];
                    return this.hand_cpu = this.hand_shuffle[0];
                };
                GameComponent.prototype.Compare = function (P) {
                    this.played = 0;
                    var CPU = this.CPU();
                    // console.log(P, CPU);
                    if (P === CPU) {
                        this.result = 'Draw.';
                    }
                    else {
                        if ((P === this.hands[0] && CPU === this.hands[2]) ||
                            (P === this.hands[1] && CPU === this.hands[0]) ||
                            (P === this.hands[2] && CPU === this.hands[1])) {
                            this.player_score += 1;
                            this.result = 'You Win.';
                        }
                        else {
                            this.result = 'You Lose.';
                            this.check = true;
                            if (this.check) {
                                this.result = 'GAME OVER.';
                                this.card_visible = {
                                    'display': 'none'
                                };
                                this.over = {
                                    'display': 'block'
                                };
                            }
                            else { }
                        }
                    }
                    this.onTimer();
                };
                GameComponent.prototype.onSave = function (username, score) {
                    if (username) {
                        console.log(username, score);
                    }
                };
                GameComponent.prototype.reset = function () {
                    this.result = 'Select your card.';
                    this.player_score = 0;
                    this.card_visible = {
                        'display': 'block'
                    };
                    this.over = {
                        'display': 'none'
                    };
                };
                GameComponent.prototype.onTimer = function () {
                    var _this = this;
                    this.count = 1;
                    var test = setInterval(function () {
                        _this.count += 1;
                    }, 1000);
                    setTimeout(function () {
                        _this.count = '';
                        clearInterval(test);
                        _this.count = 'ready';
                        _this.played = 1;
                        if (!_this.check) {
                            _this.result = 'Select your card.';
                        }
                    }, 3000);
                };
                GameComponent.prototype.onSelected = function (selected) {
                    this.selected = selected;
                };
                GameComponent.prototype.ngOnInit = function () {
                    this.CPU();
                };
                return GameComponent;
            }());
            GameComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-game',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")).default]
                })
            ], GameComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(router) {
                    this.router = router;
                }
                HomeComponent.prototype.onLogin = function () {
                    this.router.navigate(['/game']);
                };
                HomeComponent.prototype.onScore = function () {
                    this.router.navigate(['score']);
                };
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/member/member.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/member/member.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9tZW1iZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/member/member.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/member/member.component.ts ***!
          \********************************************/
        /*! exports provided: MemberComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function () { return MemberComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/member.service */ "./src/app/services/member.service.ts");
            var MemberComponent = /** @class */ (function () {
                function MemberComponent(memberService) {
                    this.memberService = memberService;
                    this.mySkill = ['เขียนโปรแกรม', 'ร้องเพลง', 'เล่นกีฬาฟุตบอล', 'เล่นกายกรรม'];
                    this.alertStyle = {
                        'display': 'none'
                    };
                    this.textWarning = {
                        'border-color': 'none'
                    };
                    this.btnUpdate = 0;
                    this.btnSubmit = 0;
                }
                MemberComponent.prototype.getMemberAll = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.memberService.getMemberAll()
                                        .subscribe(function (data) {
                                        console.log(data);
                                        _this.items = data;
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MemberComponent.prototype.onUpdate = function (item) {
                    var _this = this;
                    if (item.mem_fname && item.mem_lname && item.mem_phone && item.mem_email) {
                        this.btnUpdate = 1;
                        var record = {};
                        record['ID'] = item.mem_id;
                        record['Fname'] = item.mem_fname;
                        record['Lname'] = item.mem_lname;
                        record['Phone'] = item.mem_phone;
                        record['Email'] = item.mem_email;
                        record['Skill'] = item.mem_skill;
                        record['Address'] = item.mem_address;
                        this.memberService.updateMember(record);
                        swal({
                            text: 'อัปเดตข้อมูลเรียบร้อยแล้ว',
                            type: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'ตกลง',
                        }).then(function () {
                            _this.btnUpdate = 1;
                        });
                    }
                    else {
                        this.btnUpdate = 0;
                        this.alertStyle = {
                            'display': 'block'
                        };
                        this.textWarning = {
                            'border-color': 'red'
                        };
                    }
                };
                MemberComponent.prototype.onCancel = function () {
                    this.getMemberAll();
                    this.alertStyle = {
                        'display': 'none'
                    };
                    this.textWarning = {
                        'border-color': 'gainsboro'
                    };
                };
                MemberComponent.prototype.onDelete = function (item) {
                    var _this = this;
                    // console.log(id);
                    swal({
                        text: 'ยืนยันการลบข้อมูลหรือไม่ ?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'ยืนยัน',
                        cancelButtonText: 'ยกเลิก'
                    }).then(function (result) {
                        _this.memberService.deleteMember(item);
                        swal({
                            text: 'ลบข้อมูลเรียบร้อยแล้ว',
                            type: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'ตกลง',
                        }).then(function (result) {
                            _this.getMemberAll();
                        });
                    });
                };
                MemberComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.firstname
                        && this.lastname
                        && this.phone
                        && this.email) {
                        var record = {};
                        record['Firstname'] = this.firstname;
                        record['Lastname'] = this.lastname;
                        record['Phone'] = this.phone;
                        record['Email'] = this.email;
                        record['Address'] = this.address;
                        record['Skill'] = this.skill;
                        //console.log(record);
                        this.memberService.postMember(record);
                        swal({
                            text: 'บันทึกข้อมูลเรียบร้อยแล้ว',
                            type: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'ตกลง',
                        }).then(function () {
                            _this.getMemberAll();
                            _this.btnSubmit = 1;
                        });
                    }
                    else {
                        this.btnSubmit = 0;
                        this.alertStyle = {
                            'display': 'block'
                        };
                        this.textWarning = {
                            'border-color': 'red'
                        };
                    }
                };
                MemberComponent.prototype.onReset = function () {
                    this.firstname = '';
                    this.lastname = '';
                    this.phone = '';
                    this.email = '';
                    this.address = '';
                    this.alertStyle = {
                        'display': 'none'
                    };
                    this.textWarning = {
                        'border-color': 'gainsboro'
                    };
                };
                MemberComponent.prototype.ngOnInit = function () {
                    this.getMemberAll();
                };
                return MemberComponent;
            }());
            MemberComponent.ctorParameters = function () { return [
                { type: _services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] }
            ]; };
            MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-member',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")).default]
                })
            ], MemberComponent);
            /***/ 
        }),
        /***/ "./src/app/score/score.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/score/score.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".custom{\r\n  border-radius: 5px;\r\n  width: 120%;\r\n}\r\n\r\n.btn2{\r\n  padding: 0;\r\n  margin: 10px 25px 10px 25px;\r\n  transition: transform .3s;\r\n}\r\n\r\n.btn:hover{\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.scale{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.label1{\r\n  text-align: center;\r\n  margin: 10px 10px;\r\n  color: chocolate;\r\n}\r\n\r\n.label2{\r\n  text-align: center;\r\n  margin: 10px 10px;\r\n  }\r\n\r\n.hr{\r\n  width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUvc2NvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBRTNCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakI7O0FBRUY7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbXtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbn1cclxuXHJcbi5idG4ye1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxMHB4IDI1cHggMTBweCAyNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zY2FsZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5sYWJlbDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIGNvbG9yOiBjaG9jb2xhdGU7XHJcbn1cclxuXHJcbi5sYWJlbDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbi5ocntcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/score/score.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/score/score.component.ts ***!
          \******************************************/
        /*! exports provided: ScoreComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function () { return ScoreComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ScoreComponent = /** @class */ (function () {
                function ScoreComponent() {
                    this.flipped = false;
                }
                ScoreComponent.prototype.flipIt = function () {
                    this.flipped = !this.flipped;
                };
                ScoreComponent.prototype.ngOnInit = function () {
                };
                return ScoreComponent;
            }());
            ScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-score',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/score/score.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score.component.css */ "./src/app/score/score.component.css")).default]
                })
            ], ScoreComponent);
            /***/ 
        }),
        /***/ "./src/app/services/backendurl.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/backendurl.service.ts ***!
          \************************************************/
        /*! exports provided: BackendurlService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendurlService", function () { return BackendurlService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BackendurlService = /** @class */ (function () {
                function BackendurlService() {
                    this.url = 'http://localhost/MrFermz/';
                }
                return BackendurlService;
            }());
            BackendurlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BackendurlService);
            /***/ 
        }),
        /***/ "./src/app/services/member.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/member.service.ts ***!
          \********************************************/
        /*! exports provided: MemberService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function () { return MemberService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _backendurl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backendurl.service */ "./src/app/services/backendurl.service.ts");
            var MemberService = /** @class */ (function () {
                function MemberService(http, backendUrl) {
                    this.http = http;
                    this.backendUrl = backendUrl;
                    this.httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                MemberService.prototype.postMember = function (record) {
                    // console.log(record);
                    var url = this.backendUrl.url + 'post_member_api.php';
                    this.http.post(url, JSON.stringify(record), this.httpOption).subscribe();
                };
                MemberService.prototype.getMemberAll = function () {
                    var url = this.backendUrl.url + 'get_member_api.php';
                    return this.http.get(url);
                };
                MemberService.prototype.deleteMember = function (item) {
                    // console.log(id);
                    var url = this.backendUrl.url + 'delete_member_api.php';
                    this.http.post(url, JSON.stringify(item), this.httpOption).subscribe();
                };
                MemberService.prototype.updateMember = function (record) {
                    // console.log(record);
                    var url = this.backendUrl.url + 'update_member_api.php';
                    this.http.post(url, JSON.stringify(record), this.httpOption).subscribe();
                };
                return MemberService;
            }());
            MemberService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
                { type: _backendurl_service__WEBPACK_IMPORTED_MODULE_3__["BackendurlService"] }
            ]; };
            MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], MemberService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Work\MrFermz\rmutsv\เตรียมสหกิจ\PSR\PSR\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map