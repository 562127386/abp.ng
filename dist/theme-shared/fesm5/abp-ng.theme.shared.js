import { ConfigState, takeUntilDestroy, StartLoader, StopLoader, PROJECTION_STRATEGY, ContentProjectionService, LocalizationService, SortPipe, RestOccurError, DomInsertionService, CONTENT_STRATEGY, LazyLoadService, noop, CoreModule } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { Component, Input, EventEmitter, Renderer2, Output, ViewChild, ElementRef, ChangeDetectorRef, ViewEncapsulation, ViewContainerRef, Injectable, ɵɵdefineInjectable, ɵɵinject, ContentChild, ViewChildren, Directive, ComponentFactoryResolver, Injector, HostBinding, Host, Optional, Self, ApplicationRef, RendererFactory2, Inject, INJECTOR, InjectionToken, inject, APP_INITIALIZER, NgModule } from '@angular/core';
import { NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroy as takeUntilDestroy$1, NgxValidateCoreModule, validatePassword } from '@ngx-validate/core';
import { __read, __assign, __extends, __spread } from 'tslib';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Store, ofActionSuccessful, Actions } from '@ngxs/store';
import { ReplaySubject, BehaviorSubject, fromEvent, timer, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil, distinctUntilChanged, take, map } from 'rxjs/operators';
import snq from 'snq';
import { animation, style, animate, trigger, transition, useAnimation, query, keyframes, state } from '@angular/animations';
import clone from 'just-clone';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterError, RouterDataResolved, Navigate, RouterState } from '@ngxs/router-plugin';
import { Validators } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, store) {
        this.router = router;
        this.store = store;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.show = !!this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.LeptonLayoutState; }));
        if (this.show && !this.segments.length) {
            /** @type {?} */
            var splittedUrl = this.router.url.split('/').filter((/**
             * @param {?} chunk
             * @return {?}
             */
            function (chunk) { return chunk; }));
            /** @type {?} */
            var currentUrl = this.store.selectSnapshot(ConfigState.getRoute(splittedUrl[0]));
            if (!currentUrl) {
                currentUrl = this.store.selectSnapshot(ConfigState.getRoute(null, null, this.router.url));
                splittedUrl = [this.router.url];
                if (!currentUrl) {
                    this.show = false;
                    return;
                }
            }
            this.segments.push(currentUrl.name);
            if (splittedUrl.length > 1) {
                var _a = __read(splittedUrl), arr = _a.slice(1);
                /** @type {?} */
                var childRoute = currentUrl;
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var element = arr[i];
                    if (!childRoute.children || !childRoute.children.length)
                        return { value: void 0 };
                    childRoute = childRoute.children.find((/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) { return child.path === element; }));
                    this_1.segments.push(childRoute.name);
                };
                var this_1 = this;
                for (var i = 0; i < arr.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
        }
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-breadcrumb',
                    template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Store }
    ]; };
    BreadcrumbComponent.propDecorators = {
        segments: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.segments;
    /** @type {?} */
    BreadcrumbComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        // tslint:disable
        this.click = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        // tslint:enable
        this.abpClick = new EventEmitter();
        this.abpFocus = new EventEmitter();
        this.abpBlur = new EventEmitter();
    }
    Object.defineProperty(ButtonComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return "" + (this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attributes) {
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.renderer.setAttribute(_this.buttonRef.nativeElement, key, _this.attributes[key]);
            }));
        }
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-button',
                    template: "\n    <button\n      #button\n      [id]=\"buttonId\"\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click.stop)=\"click.next($event); abpClick.next($event)\"\n      (focus)=\"focus.next($event); abpFocus.next($event)\"\n      (blur)=\"blur.next($event); abpBlur.next($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ButtonComponent.propDecorators = {
        buttonId: [{ type: Input }],
        buttonClass: [{ type: Input }],
        buttonType: [{ type: Input }],
        iconClass: [{ type: Input }],
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        attributes: [{ type: Input }],
        click: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        abpClick: [{ type: Output }],
        abpFocus: [{ type: Output }],
        abpBlur: [{ type: Output }],
        buttonRef: [{ type: ViewChild, args: ['button', { static: true },] }]
    };
    return ButtonComponent;
}());
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.buttonId;
    /** @type {?} */
    ButtonComponent.prototype.buttonClass;
    /** @type {?} */
    ButtonComponent.prototype.buttonType;
    /** @type {?} */
    ButtonComponent.prototype.iconClass;
    /** @type {?} */
    ButtonComponent.prototype.loading;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.attributes;
    /** @type {?} */
    ButtonComponent.prototype.click;
    /** @type {?} */
    ButtonComponent.prototype.focus;
    /** @type {?} */
    ButtonComponent.prototype.blur;
    /** @type {?} */
    ButtonComponent.prototype.abpClick;
    /** @type {?} */
    ButtonComponent.prototype.abpFocus;
    /** @type {?} */
    ButtonComponent.prototype.abpBlur;
    /** @type {?} */
    ButtonComponent.prototype.buttonRef;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/widget-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} count
 * @return {?}
 */
function getRandomBackgroundColor(count) {
    /** @type {?} */
    var colors = [];
    for (var i = 0; i < count; i++) {
        /** @type {?} */
        var r = ((i + 5) * (i + 5) * 474) % 255;
        /** @type {?} */
        var g = ((i + 5) * (i + 5) * 1600) % 255;
        /** @type {?} */
        var b = ((i + 5) * (i + 5) * 84065) % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
    }
    return colors;
}
/** @type {?} */
var chartJsLoaded$ = new ReplaySubject(1);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartComponent = /** @class */ (function () {
    function ChartComponent(el, cdRef) {
        var _this = this;
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new EventEmitter();
        this.initialized = new BehaviorSubject(this);
        this.onCanvasClick = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.chart) {
                /** @type {?} */
                var element = _this.chart.getElementAtEvent(event);
                /** @type {?} */
                var dataset = _this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    _this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset: dataset,
                    });
                }
            }
        });
        this.initChart = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var opts = _this.options || {};
            opts.responsive = _this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (_this.height || _this.width)) {
                opts.maintainAspectRatio = false;
            }
            _this.chart = new Chart(_this.canvas, {
                type: _this.type,
                data: _this.data,
                options: _this.options,
                plugins: _this.plugins,
            });
            _this.cdRef.detectChanges();
        });
        this.generateLegend = (/**
         * @return {?}
         */
        function () {
            if (_this.chart) {
                return _this.chart.generateLegend();
            }
        });
        this.refresh = (/**
         * @return {?}
         */
        function () {
            if (_this.chart) {
                _this.chart.update();
                _this.cdRef.detectChanges();
            }
        });
        this.reinit = (/**
         * @return {?}
         */
        function () {
            if (_this.chart) {
                _this.chart.destroy();
                _this.initChart();
            }
        });
    }
    Object.defineProperty(ChartComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._data = val;
            this.reinit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "canvas", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.children[0].children[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "base64Image", {
        get: /**
         * @return {?}
         */
        function () {
            return this.chart.toBase64Image();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        chartJsLoaded$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.testChartJs();
            _this.initChart();
            _this._initialized = true;
        }));
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.testChartJs = /**
     * @return {?}
     */
    function () {
        try {
            // tslint:disable-next-line: no-unused-expression
            Chart;
        }
        catch (error) {
            throw new Error("Chart is not found. Import the Chart from app.module like shown below:\n      import('chart.js');\n      ");
        }
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-chart',
                    template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    ChartComponent.propDecorators = {
        type: [{ type: Input }],
        options: [{ type: Input }],
        plugins: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        responsive: [{ type: Input }],
        onDataSelect: [{ type: Output }],
        initialized: [{ type: Output }],
        data: [{ type: Input }]
    };
    return ChartComponent;
}());
if (false) {
    /** @type {?} */
    ChartComponent.prototype.type;
    /** @type {?} */
    ChartComponent.prototype.options;
    /** @type {?} */
    ChartComponent.prototype.plugins;
    /** @type {?} */
    ChartComponent.prototype.width;
    /** @type {?} */
    ChartComponent.prototype.height;
    /** @type {?} */
    ChartComponent.prototype.responsive;
    /** @type {?} */
    ChartComponent.prototype.onDataSelect;
    /** @type {?} */
    ChartComponent.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype._initialized;
    /** @type {?} */
    ChartComponent.prototype._data;
    /** @type {?} */
    ChartComponent.prototype.chart;
    /** @type {?} */
    ChartComponent.prototype.onCanvasClick;
    /** @type {?} */
    ChartComponent.prototype.initChart;
    /** @type {?} */
    ChartComponent.prototype.generateLegend;
    /** @type {?} */
    ChartComponent.prototype.refresh;
    /** @type {?} */
    ChartComponent.prototype.reinit;
    /** @type {?} */
    ChartComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.cdRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/confirmation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Confirmation;
(function (Confirmation) {
    /**
     * @record
     */
    function Options() { }
    Confirmation.Options = Options;
    if (false) {
        /** @type {?|undefined} */
        Options.prototype.id;
        /** @type {?|undefined} */
        Options.prototype.dismissible;
        /** @type {?|undefined} */
        Options.prototype.messageLocalizationParams;
        /** @type {?|undefined} */
        Options.prototype.titleLocalizationParams;
        /** @type {?|undefined} */
        Options.prototype.hideCancelBtn;
        /** @type {?|undefined} */
        Options.prototype.hideYesBtn;
        /** @type {?|undefined} */
        Options.prototype.cancelText;
        /** @type {?|undefined} */
        Options.prototype.yesText;
        /**
         *
         * @deprecated To be deleted in v2.9
         * @type {?|undefined}
         */
        Options.prototype.closable;
    }
    /**
     * @record
     */
    function DialogData() { }
    Confirmation.DialogData = DialogData;
    if (false) {
        /** @type {?} */
        DialogData.prototype.message;
        /** @type {?|undefined} */
        DialogData.prototype.title;
        /** @type {?|undefined} */
        DialogData.prototype.severity;
        /** @type {?|undefined} */
        DialogData.prototype.options;
    }
    var Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Confirmation.Status || (Confirmation.Status = {}));
})(Confirmation || (Confirmation = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
        this.confirm = Confirmation.Status.confirm;
        this.reject = Confirmation.Status.reject;
        this.dismiss = Confirmation.Status.dismiss;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    ConfirmationComponent.prototype.close = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.clear(status);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConfirmationComponent.prototype.getIconClass = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var severity = _a.severity;
        switch (severity) {
            case 'info':
                return 'fa-info-circle';
            case 'success':
                return 'fa-check-circle';
            case 'warning':
                return 'fa-exclamation-triangle';
            case 'error':
                return 'fa-times-circle';
            default:
                return 'fa-question-circle';
        }
    };
    ConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-confirmation',
                    template: "<div class=\"confirmation\" *ngIf=\"confirmation$ | async as data\">\r\n  <div\r\n    class=\"confirmation-backdrop\"\r\n    (click)=\"data.options?.dismissible ? close(dismiss) : null\"\r\n  ></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"getIconClass(data)\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1\r\n        class=\"title\"\r\n        *ngIf=\"data.title\"\r\n        [innerHTML]=\"data.title | abpLocalization: data.options?.titleLocalizationParams\"\r\n      ></h1>\r\n      <p\r\n        class=\"message\"\r\n        *ngIf=\"data.message\"\r\n        [innerHTML]=\"data.message | abpLocalization: data.options?.messageLocalizationParams\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        [innerHTML]=\"data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      ></button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        [innerHTML]=\"data.options?.yesText || 'AbpUi::Yes' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;font-size:14px;font-weight:600}"]
                }] }
    ];
    return ConfirmationComponent;
}());
if (false) {
    /** @type {?} */
    ConfirmationComponent.prototype.confirm;
    /** @type {?} */
    ConfirmationComponent.prototype.reject;
    /** @type {?} */
    ConfirmationComponent.prototype.dismiss;
    /** @type {?} */
    ConfirmationComponent.prototype.confirmation$;
    /** @type {?} */
    ConfirmationComponent.prototype.clear;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpErrorWrapperComponent = /** @class */ (function () {
    function HttpErrorWrapperComponent() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
        this.isHomeShow = true;
    }
    Object.defineProperty(HttpErrorWrapperComponent.prototype, "statusText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status ? "[" + this.status + "]" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.backgroundColor =
            snq((/**
             * @return {?}
             */
            function () { return window.getComputedStyle(document.body).getPropertyValue('background-color'); })) ||
                '#fff';
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customComponent) {
            /** @type {?} */
            var customComponentRef = this.cfRes
                .resolveComponentFactory(this.customComponent)
                .create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.destroy();
        }));
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    HttpErrorWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-http-error-wrapper',
                    template: "<div\r\n  #container\r\n  id=\"abp-http-error-container\"\r\n  class=\"error\"\r\n  [style.backgroundColor]=\"backgroundColor\"\r\n>\r\n  <button\r\n    *ngIf=\"!hideCloseIcon\"\r\n    id=\"abp-close-button\"\r\n    type=\"button\"\r\n    class=\"close mr-2\"\r\n    (click)=\"destroy()\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a\r\n            *ngIf=\"isHomeShow\"\r\n            (click)=\"destroy()\"\r\n            routerLink=\"/\"\r\n            class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    HttpErrorWrapperComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
    };
    return HttpErrorWrapperComponent;
}());
if (false) {
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.appRef;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.cfRes;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.injector;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.status;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.title;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.details;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.customComponent;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.destroy$;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.hideCloseIcon;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.backgroundColor;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.isHomeShow;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.containerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loader-bar/loader-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoaderBarComponent = /** @class */ (function () {
    function LoaderBarComponent(actions, router, cdRef) {
        var _this = this;
        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
        this.isLoading = false;
        this.progressLevel = 0;
        this.intervalPeriod = 350;
        this.stopDelay = 800;
        this.filter = (/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload.url.indexOf('openid-configuration') < 0;
        });
        this.clearProgress = (/**
         * @return {?}
         */
        function () {
            _this.progressLevel = 0;
            _this.cdRef.detectChanges();
        });
        this.reportProgress = (/**
         * @return {?}
         */
        function () {
            if (_this.progressLevel < 75) {
                _this.progressLevel += 1 + Math.random() * 9;
            }
            else if (_this.progressLevel < 90) {
                _this.progressLevel += 0.4;
            }
            else if (_this.progressLevel < 100) {
                _this.progressLevel += 0.1;
            }
            else {
                _this.interval.unsubscribe();
            }
            _this.cdRef.detectChanges();
        });
    }
    Object.defineProperty(LoaderBarComponent.prototype, "boxShadow", {
        get: /**
         * @return {?}
         */
        function () {
            return "0 0 10px rgba(" + this.color + ", 0.5)";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    LoaderBarComponent.prototype.subscribeToLoadActions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(StartLoader, StopLoader), filter(this.filter), takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action instanceof StartLoader)
                _this.startLoading();
            else
                _this.stopLoading();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    LoaderBarComponent.prototype.subscribeToRouterEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationError;
        })), takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart)
                _this.startLoading();
            else
                _this.stopLoading();
        }));
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeToLoadActions();
        this.subscribeToRouterEvents();
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.interval)
            this.interval.unsubscribe();
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.startLoading = /**
     * @return {?}
     */
    function () {
        if (this.isLoading || (this.interval && !this.interval.closed))
            return;
        this.isLoading = true;
        this.interval = timer(0, this.intervalPeriod).subscribe(this.reportProgress);
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.stopLoading = /**
     * @return {?}
     */
    function () {
        if (this.interval)
            this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = timer(this.stopDelay).subscribe(this.clearProgress);
    };
    LoaderBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-loader-bar',
                    template: "\n    <div id=\"abp-loader-bar\" [ngClass]=\"containerClass\" [class.is-loading]=\"isLoading\">\n      <div\n        class=\"abp-progress\"\n        [class.progressing]=\"progressLevel\"\n        [style.width.vw]=\"progressLevel\"\n        [ngStyle]=\"{\n          'background-color': color,\n          'box-shadow': boxShadow\n        }\"\n      ></div>\n    </div>\n  ",
                    styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s}"]
                }] }
    ];
    /** @nocollapse */
    LoaderBarComponent.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: ChangeDetectorRef }
    ]; };
    LoaderBarComponent.propDecorators = {
        containerClass: [{ type: Input }],
        color: [{ type: Input }],
        isLoading: [{ type: Input }],
        filter: [{ type: Input }]
    };
    return LoaderBarComponent;
}());
if (false) {
    /** @type {?} */
    LoaderBarComponent.prototype.containerClass;
    /** @type {?} */
    LoaderBarComponent.prototype.color;
    /** @type {?} */
    LoaderBarComponent.prototype.isLoading;
    /** @type {?} */
    LoaderBarComponent.prototype.progressLevel;
    /** @type {?} */
    LoaderBarComponent.prototype.interval;
    /** @type {?} */
    LoaderBarComponent.prototype.timer;
    /** @type {?} */
    LoaderBarComponent.prototype.intervalPeriod;
    /** @type {?} */
    LoaderBarComponent.prototype.stopDelay;
    /** @type {?} */
    LoaderBarComponent.prototype.filter;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.clearProgress;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.reportProgress;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.cdRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loading/loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-loading',
                    template: "\n    <div class=\"abp-loading\">\n      <i class=\"fa fa-spinner fa-pulse abp-spinner\"></i>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      .abp-loading {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 1040;\n      }\n\n      .abp-loading .abp-spinner {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        font-size: 14px;\n        -moz-transform: translateX(-50%) translateY(-50%);\n        -o-transform: translateX(-50%) translateY(-50%);\n        -ms-transform: translateX(-50%) translateY(-50%);\n        -webkit-transform: translateX(-50%) translateY(-50%);\n        transform: translateX(-50%) translateY(-50%);\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return []; };
    return LoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent() {
    }
    ModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-modal-container',
                    template: "\n    <ng-container #container></ng-container>\n  "
                }] }
    ];
    ModalContainerComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { static: true, read: ViewContainerRef },] }]
    };
    return ModalContainerComponent;
}());
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/fade.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fadeIn = animation([style({ opacity: '0' }), animate('{{ time}} {{ easing }}', style({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
var fadeOut = animation([style({ opacity: '1' }), animate('{{ time}} {{ easing }}', style({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var fadeInDown = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeInUp = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeInLeft = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeInRight = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutDown = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutUp = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutLeft = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutRight = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/modal.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fadeAnimation = trigger('fade', [
    transition(':enter', useAnimation(fadeIn)),
    transition(':leave', useAnimation(fadeOut)),
]);
/** @type {?} */
var dialogAnimation = trigger('dialog', [
    transition(':enter', useAnimation(fadeInDown)),
    transition(':leave', useAnimation(fadeOut)),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService(contentProjectionService) {
        var _this = this;
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
        this.clear = (/**
         * @param {?=} status
         * @return {?}
         */
        function (status) {
            if (status === void 0) { status = Confirmation.Status.dismiss; }
            _this.confirmation$.next();
            _this.status$.next(status);
        });
    }
    /**
     * @private
     * @return {?}
     */
    ConfirmationService.prototype.setContainer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
            confirmation$: this.confirmation$,
            clear: this.clear,
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.containerComponentRef.changeDetectorRef.detectChanges();
        }), 0);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.info = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'info', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.success = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'success', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.warn = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'warning', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.error = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'error', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} severity
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.show = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} severity
     * @param {?=} options
     * @return {?}
     */
    function (message, title, severity, options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        if (!this.containerComponentRef)
            this.setContainer();
        this.confirmation$.next({
            message: message,
            title: title,
            severity: severity || 'neutral',
            options: options,
        });
        this.status$ = new Subject();
        var _a = options.dismissible, dismissible = _a === void 0 ? true : _a;
        if (dismissible)
            this.listenToEscape();
        return this.status$;
    };
    /**
     * @private
     * @return {?}
     */
    ConfirmationService.prototype.listenToEscape = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.status$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.clear();
        }));
    };
    ConfirmationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfirmationService.ctorParameters = function () { return [
        { type: ContentProjectionService }
    ]; };
    /** @nocollapse */ ConfirmationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(ɵɵinject(ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
    return ConfirmationService;
}());
if (false) {
    /** @type {?} */
    ConfirmationService.prototype.status$;
    /** @type {?} */
    ConfirmationService.prototype.confirmation$;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.containerComponentRef;
    /** @type {?} */
    ConfirmationService.prototype.clear;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.contentProjectionService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalService = /** @class */ (function () {
    function ModalService(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.setContainer();
    }
    /**
     * @private
     * @return {?}
     */
    ModalService.prototype.setContainer = /**
     * @private
     * @return {?}
     */
    function () {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.clearModal = /**
     * @return {?}
     */
    function () {
        this.getContainer().clear();
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.containerComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalService.prototype.getContainer = /**
     * @return {?}
     */
    function () {
        return this.containerComponentRef.instance.container;
    };
    /**
     * @template T
     * @param {?} template
     * @param {?=} context
     * @return {?}
     */
    ModalService.prototype.renderTemplate = /**
     * @template T
     * @param {?} template
     * @param {?=} context
     * @return {?}
     */
    function (template, context) {
        /** @type {?} */
        var containerRef = this.getContainer();
        /** @type {?} */
        var strategy = PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
        this.contentProjectionService.projectContent(strategy);
    };
    /**
     * @return {?}
     */
    ModalService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.containerComponentRef.destroy();
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: ContentProjectionService }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(ContentProjectionService)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.contentProjectionService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent(renderer, confirmationService, modalService) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.modalService = modalService;
        this.centered = false;
        this.modalClass = '';
        this.size = 'lg';
        this.visibleChange = new EventEmitter();
        this.init = new EventEmitter();
        this.appear = new EventEmitter();
        this.disappear = new EventEmitter();
        this._visible = false;
        this._busy = false;
        this.isModalOpen = false;
        this.isConfirmationOpen = false;
        this.destroy$ = new Subject();
        this.toggle$ = new Subject();
        this.initToggleStream();
    }
    Object.defineProperty(ModalComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value !== 'boolean')
                return;
            this.toggle$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "busy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._busy;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
                this.abpSubmit.loading = value;
            }
            this._busy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "isFormDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ModalComponent.prototype.initToggleStream = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.toggle$
            .pipe(takeUntilDestroy(this), debounceTime(0), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.toggle(value); }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ModalComponent.prototype.toggle = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            this.modalService.renderTemplate(this.template);
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.listen(); }), 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
        }
        else {
            this.modalService.clearModal();
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.busy)
            return;
        if (this.isFormDirty) {
            if (this.isConfirmationOpen)
                return;
            this.isConfirmationOpen = true;
            this.confirmationService
                .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                .subscribe((/**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                _this.isConfirmationOpen = false;
                if (status === Confirmation.Status.confirm) {
                    _this.visible = false;
                }
            }));
        }
        else {
            this.visible = false;
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.isFormDirty) {
                event.returnValue = true;
            }
            else {
                event.returnValue = false;
                delete event.returnValue;
            }
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.abpClose)
                return;
            fromEvent(_this.abpClose.nativeElement, 'click')
                .pipe(takeUntil(_this.destroy$), filter((/**
             * @return {?}
             */
            function () { return !!_this.modalContent; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.close(); }));
        }), 0);
        this.init.emit();
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-modal',
                    template: "<ng-template #template>\r\n  <div\r\n    *ngIf=\"visible\"\r\n    [@fade]=\"isModalOpen\"\r\n    id=\"modal-container\"\r\n    class=\"modal show {{ modalClass }}\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button\r\n            id=\"abp-modal-close-button\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"close()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-content></ng-content>\r\n",
                    animations: [fadeAnimation],
                    providers: [ModalService],
                    styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ConfirmationService },
        { type: ModalService }
    ]; };
    ModalComponent.propDecorators = {
        visible: [{ type: Input }],
        busy: [{ type: Input }],
        centered: [{ type: Input }],
        modalClass: [{ type: Input }],
        size: [{ type: Input }],
        abpSubmit: [{ type: ContentChild, args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
        abpHeader: [{ type: ContentChild, args: ['abpHeader', { static: false },] }],
        abpBody: [{ type: ContentChild, args: ['abpBody', { static: false },] }],
        abpFooter: [{ type: ContentChild, args: ['abpFooter', { static: false },] }],
        abpClose: [{ type: ContentChild, args: ['abpClose', { static: false, read: ElementRef },] }],
        template: [{ type: ViewChild, args: ['template', { static: false },] }],
        modalContent: [{ type: ViewChild, args: ['abpModalContent', { static: false },] }],
        abpButtons: [{ type: ViewChildren, args: ['abp-button',] }],
        visibleChange: [{ type: Output }],
        init: [{ type: Output }],
        appear: [{ type: Output }],
        disappear: [{ type: Output }]
    };
    return ModalComponent;
}());
if (false) {
    /** @type {?} */
    ModalComponent.prototype.centered;
    /** @type {?} */
    ModalComponent.prototype.modalClass;
    /** @type {?} */
    ModalComponent.prototype.size;
    /** @type {?} */
    ModalComponent.prototype.abpSubmit;
    /** @type {?} */
    ModalComponent.prototype.abpHeader;
    /** @type {?} */
    ModalComponent.prototype.abpBody;
    /** @type {?} */
    ModalComponent.prototype.abpFooter;
    /** @type {?} */
    ModalComponent.prototype.abpClose;
    /** @type {?} */
    ModalComponent.prototype.template;
    /** @type {?} */
    ModalComponent.prototype.modalContent;
    /** @type {?} */
    ModalComponent.prototype.abpButtons;
    /** @type {?} */
    ModalComponent.prototype.visibleChange;
    /** @type {?} */
    ModalComponent.prototype.init;
    /** @type {?} */
    ModalComponent.prototype.appear;
    /** @type {?} */
    ModalComponent.prototype.disappear;
    /** @type {?} */
    ModalComponent.prototype._visible;
    /** @type {?} */
    ModalComponent.prototype._busy;
    /** @type {?} */
    ModalComponent.prototype.isModalOpen;
    /** @type {?} */
    ModalComponent.prototype.isConfirmationOpen;
    /** @type {?} */
    ModalComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.toggle$;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this._value = 1;
        this.valueChange = new EventEmitter();
        this.totalPages = 0;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} page
         * @return {?}
         */
        function (_, page) { return page; });
    }
    Object.defineProperty(PaginationComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value === newValue)
                return;
            this._value = newValue;
            this.valueChange.emit(newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pageArray", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var count = this.totalPages < 5 ? this.totalPages : 5;
            if (this.value === 1 || this.value === 2) {
                return Array.from(new Array(count)).map((/**
                 * @param {?} _
                 * @param {?} index
                 * @return {?}
                 */
                function (_, index) { return index + 1; }));
            }
            else if (this.value === this.totalPages || this.value === this.totalPages - 1) {
                return Array.from(new Array(count)).map((/**
                 * @param {?} _
                 * @param {?} index
                 * @return {?}
                 */
                function (_, index) { return _this.totalPages - count + 1 + index; }));
            }
            else {
                return [this.value - 2, this.value - 1, this.value, this.value + 1, this.value + 2];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value || this.value < 1 || this.value > this.totalPages) {
            this.value = 1;
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.changePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (page < 1)
            return;
        else if (page > this.totalPages)
            return;
        this.value = page;
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-pagination',
                    template: "<div\r\n  class=\"ui-paginator-bottom ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix\"\r\n>\r\n  <a\r\n    class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-backward\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(value - 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-left\"></span></a\r\n  ><span class=\"ui-paginator-pages\"\r\n    ><a\r\n      *ngFor=\"let page of pageArray; trackBy: trackByFn\"\r\n      (click)=\"changePage(page)\"\r\n      class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\r\n      [class.ui-state-active]=\"page === value\"\r\n      tabindex=\"0\"\r\n      >{{ page }}</a\r\n    ></span\r\n  ><a\r\n    class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(value + 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-right\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(totalPages)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-forward\"></span\r\n  ></a>\r\n</div>\r\n"
                }] }
    ];
    PaginationComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        totalPages: [{ type: Input }]
    };
    return PaginationComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._value;
    /** @type {?} */
    PaginationComponent.prototype.valueChange;
    /** @type {?} */
    PaginationComponent.prototype.totalPages;
    /** @type {?} */
    PaginationComponent.prototype.trackByFn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortOrderIconComponent = /** @class */ (function () {
    function SortOrderIconComponent() {
        this.orderChange = new EventEmitter();
        this.selectedSortKeyChange = new EventEmitter();
    }
    Object.defineProperty(SortOrderIconComponent.prototype, "selectedSortKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedSortKey;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectedSortKey = value;
            this.selectedSortKeyChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOrderIconComponent.prototype, "order", {
        get: /**
         * @return {?}
         */
        function () {
            return this._order;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._order = value;
            this.orderChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOrderIconComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.selectedSortKey === this.sortKey)
                return "sorting_" + this.order;
            else
                return 'sorting';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @return {?}
     */
    SortOrderIconComponent.prototype.sort = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.selectedSortKey = key;
        switch (this.order) {
            case '':
                this.order = 'asc';
                this.orderChange.emit('asc');
                break;
            case 'asc':
                this.order = 'desc';
                this.orderChange.emit('desc');
                break;
            case 'desc':
                this.order = '';
                this.orderChange.emit('');
                break;
        }
    };
    SortOrderIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-sort-order-icon',
                    template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
                }] }
    ];
    SortOrderIconComponent.propDecorators = {
        sortKey: [{ type: Input }],
        selectedSortKey: [{ type: Input }],
        order: [{ type: Input }],
        orderChange: [{ type: Output }],
        selectedSortKeyChange: [{ type: Output }],
        iconClass: [{ type: Input }]
    };
    return SortOrderIconComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderIconComponent.prototype._order;
    /**
     * @type {?}
     * @private
     */
    SortOrderIconComponent.prototype._selectedSortKey;
    /** @type {?} */
    SortOrderIconComponent.prototype.sortKey;
    /** @type {?} */
    SortOrderIconComponent.prototype.orderChange;
    /** @type {?} */
    SortOrderIconComponent.prototype.selectedSortKeyChange;
    /** @type {?} */
    SortOrderIconComponent.prototype.iconClass;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableEmptyMessageComponent = /** @class */ (function () {
    function TableEmptyMessageComponent() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    Object.defineProperty(TableEmptyMessageComponent.prototype, "emptyMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.message || this.localizationResource + "::" + this.localizationProp;
        },
        enumerable: true,
        configurable: true
    });
    TableEmptyMessageComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[abp-table-empty-message]',
                    template: "\n    <td class=\"text-center\" [attr.colspan]=\"colspan\">\n      {{ emptyMessage | abpLocalization }}\n    </td>\n  "
                }] }
    ];
    TableEmptyMessageComponent.propDecorators = {
        colspan: [{ type: Input }],
        message: [{ type: Input }],
        localizationResource: [{ type: Input }],
        localizationProp: [{ type: Input }]
    };
    return TableEmptyMessageComponent;
}());
if (false) {
    /** @type {?} */
    TableEmptyMessageComponent.prototype.colspan;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.message;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.localizationResource;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.localizationProp;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        var _this = this;
        this.bodyScrollLeft = 0;
        this.page = 1;
        this.trackingProp = 'id';
        this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
        this.pageChange = new EventEmitter();
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} value
         * @return {?}
         */
        function (_, value) {
            return typeof value === 'object' ? value[_this.trackingProp] || value : value;
        });
    }
    Object.defineProperty(TableComponent.prototype, "totalRecords", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalRecords || this.value.length;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (newValue < 0)
                this._totalRecords = 0;
            this._totalRecords = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.rows) {
                return;
            }
            return Math.ceil(this.totalRecords / this.rows);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "slicedValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.rows || this.rows >= this.value.length) {
                return this.value;
            }
            /** @type {?} */
            var start = (this.page - 1) * this.rows;
            return this.value.slice(start, start + this.rows);
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-table',
                    template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <div class=\"pagination-wrapper\">\r\n      <ngb-pagination\r\n        [class.op-0]=\"!totalPages\"\r\n        [collectionSize]=\"totalPages\"\r\n        [pageSize]=\"1\"\r\n        [page]=\"page\"\r\n        (pageChange)=\"pageChange.emit($event)\"\r\n        [maxSize]=\"3\"\r\n        [rotate]=\"true\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div [style.margin-left.px]=\"-bodyScrollLeft\" class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"bodyScrollLeft = scrollableBody.scrollLeft\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\" *ngIf=\"value && value.length; else emptyTemplate\">\r\n    <ng-template\r\n      #bodyTemplateWrapper\r\n      *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"bodyTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n    ></ng-template>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <caption class=\"ui-table-empty\">\r\n    {{\r\n      emptyMessage | abpLocalization\r\n    }}\r\n  </caption>\r\n</ng-template>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ui-table{position:relative}.ui-table .ui-table-tbody>tr:hover,.ui-table .ui-table-tbody>tr:nth-child(even):hover{-webkit-filter:brightness(90%);filter:brightness(90%)}.ui-table .ui-table-empty{padding:20px 0;text-align:center;border:1px solid #e0e0e0;border-top-width:0}.ui-table .ui-table-caption,.ui-table .ui-table-summary{background-color:#f4f4f4;color:#333;border:1px solid #c8c8c8;padding:.25em .5em;text-align:center;font-weight:700}.ui-table .ui-table-thead>tr>th{border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4}.ui-table .ui-table-tfoot>tr>td{border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#fff}.ui-table .ui-sortable-column{transition:box-shadow .2s;cursor:pointer}.ui-table .ui-sortable-column:focus{outline:0;outline-offset:0;box-shadow:inset 0 0 0 .2em #8dcdff}.ui-table .ui-sortable-column .ui-sortable-column-icon{color:#848484}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover{background-color:#e0e0e0;color:#333}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon{color:#333}.ui-table .ui-sortable-column.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon{color:#fff}.ui-table .ui-editable-column input{font-size:14px;font-family:'Open Sans','Helvetica Neue',sans-serif}.ui-table .ui-editable-column input:focus{outline:#007ad9 solid 1px;outline-offset:2px}.ui-table .ui-table-tbody>tr{background-color:#fff;color:#333}.ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8}.ui-table .ui-table-tbody>tr.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr.ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-top>td{box-shadow:inset 0 2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-bottom>td{box-shadow:inset 0 -2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}.ui-table .ui-table-tbody>tr:nth-child(even).ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr:nth-child(even).ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr:nth-child(even).ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table.ui-table-hoverable-rows .ui-table-tbody>tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover{cursor:pointer;background-color:#eaeaea;color:#333}.ui-table table{border-collapse:collapse;width:100%;table-layout:fixed}.ui-table .ui-table-tbody>tr>td,.ui-table .ui-table-tfoot>tr>td,.ui-table .ui-table-thead>tr>th{padding:.571em .857em}.ui-table p-sorticon{vertical-align:middle}.ui-table .ui-table-auto-layout>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-auto-layout>.ui-table-wrapper>table{table-layout:auto}.ui-table .ui-table-caption{border-bottom:0}.ui-table .ui-table-summary{border-top:0}.ui-table .ui-table-scrollable-wrapper{position:relative}.ui-table .ui-table-scrollable-footer,.ui-table .ui-table-scrollable-header{overflow:hidden;border:0}.ui-table .ui-table-scrollable-body{overflow:auto;position:relative}.ui-table .ui-table-virtual-table{position:absolute}.ui-table .ui-table-loading-virtual-table{display:none}.ui-table .ui-table-frozen-view .ui-table-scrollable-body{overflow:hidden}.ui-table .ui-table-frozen-view>.ui-table-scrollable-body>table>.ui-table-tbody>tr>td:last-child{border-right:0}.ui-table .ui-table-unfrozen-view{position:absolute;top:0}.ui-table .ui-table-resizable>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-resizable .ui-table-tbody>tr>td,.ui-table .ui-table-resizable .ui-table-tfoot>tr>td,.ui-table .ui-table-resizable .ui-table-thead>tr>th{overflow:hidden}.ui-table .ui-table-resizable .ui-resizable-column{background-clip:padding-box;position:relative}.ui-table .ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer{display:none}.ui-table .ui-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5em;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.ui-table .ui-column-resizer-helper{background-color:#007ad9;width:1px;position:absolute;z-index:10;display:none}.ui-table .ui-table-tbody>tr>td.ui-editing-cell{padding:0}.ui-table .ui-table-tbody>tr>td.ui-editing-cell p-celleditor>*{width:100%}.ui-table .ui-table-reorder-indicator-down,.ui-table .ui-table-reorder-indicator-up{position:absolute;display:none}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:none}@media screen and (max-width:40em){.ui-table.ui-table-responsive .ui-table-tbody>tr>td{border:0}.ui-table .ui-table-responsive .ui-table-tfoot>tr>td,.ui-table .ui-table-responsive .ui-table-thead>tr>th,.ui-table .ui-table-responsive colgroup{display:none!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td{text-align:left;display:block;border:0;width:100%!important;box-sizing:border-box;float:left;clear:left}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{padding:.4em;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4em;font-weight:700}}.ui-table .ui-widget{font-family:'Open Sans','Helvetica Neue',sans-serif;font-size:14px;text-decoration:none}.ui-table .page-item.disabled .page-link,.ui-table .page-link{background-color:transparent;border:none}.ui-table .page-item.disabled .page-link{box-shadow:none}.ui-table .pagination{margin-bottom:0}.ui-table .pagination-wrapper{display:flex;justify-content:center;border-top:0;padding:0}.ui-table .op-0{opacity:0}"]
                }] }
    ];
    TableComponent.propDecorators = {
        value: [{ type: Input }],
        headerTemplate: [{ type: Input }],
        bodyTemplate: [{ type: Input }],
        colgroupTemplate: [{ type: Input }],
        scrollHeight: [{ type: Input }],
        scrollable: [{ type: Input }],
        rows: [{ type: Input }],
        page: [{ type: Input }],
        trackingProp: [{ type: Input }],
        emptyMessage: [{ type: Input }],
        pageChange: [{ type: Output }],
        wrapperRef: [{ type: ViewChild, args: ['wrapper', { read: ElementRef, static: false },] }],
        totalRecords: [{ type: Input }]
    };
    return TableComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._totalRecords;
    /** @type {?} */
    TableComponent.prototype.bodyScrollLeft;
    /** @type {?} */
    TableComponent.prototype.value;
    /** @type {?} */
    TableComponent.prototype.headerTemplate;
    /** @type {?} */
    TableComponent.prototype.bodyTemplate;
    /** @type {?} */
    TableComponent.prototype.colgroupTemplate;
    /** @type {?} */
    TableComponent.prototype.scrollHeight;
    /** @type {?} */
    TableComponent.prototype.scrollable;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.page;
    /** @type {?} */
    TableComponent.prototype.trackingProp;
    /** @type {?} */
    TableComponent.prototype.emptyMessage;
    /** @type {?} */
    TableComponent.prototype.pageChange;
    /** @type {?} */
    TableComponent.prototype.wrapperRef;
    /** @type {?} */
    TableComponent.prototype.trackByFn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/toast.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var toastInOut = trigger('toastInOut', [
    transition('* <=> *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate('350ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
        ], { optional: true }),
        query(':leave', animate('450ms ease', style({ opacity: 0 })), {
            optional: true,
        }),
    ]),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastContainerComponent = /** @class */ (function () {
    function ToastContainerComponent() {
        this.toasts = (/** @type {?} */ ([]));
        this.right = '30px';
        this.bottom = '30px';
    }
    /**
     * @return {?}
     */
    ToastContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.toasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        function (toasts) {
            _this.toasts = _this.toastKey
                ? toasts.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    return t.options && t.options.containerKey !== _this.toastKey;
                }))
                : toasts;
        }));
    };
    /**
     * @param {?} index
     * @param {?} toast
     * @return {?}
     */
    ToastContainerComponent.prototype.trackByFunc = /**
     * @param {?} index
     * @param {?} toast
     * @return {?}
     */
    function (index, toast) {
        if (!toast)
            return null;
        return toast.options.id;
    };
    ToastContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-toast-container',
                    template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
                    animations: [toastInOut],
                    styles: [".toast-container{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
                }] }
    ];
    ToastContainerComponent.propDecorators = {
        top: [{ type: Input }],
        right: [{ type: Input }],
        bottom: [{ type: Input }],
        left: [{ type: Input }],
        toastKey: [{ type: Input }]
    };
    return ToastContainerComponent;
}());
if (false) {
    /** @type {?} */
    ToastContainerComponent.prototype.toasts$;
    /** @type {?} */
    ToastContainerComponent.prototype.toasts;
    /** @type {?} */
    ToastContainerComponent.prototype.top;
    /** @type {?} */
    ToastContainerComponent.prototype.right;
    /** @type {?} */
    ToastContainerComponent.prototype.bottom;
    /** @type {?} */
    ToastContainerComponent.prototype.left;
    /** @type {?} */
    ToastContainerComponent.prototype.toastKey;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Toaster;
(function (Toaster) {
    /**
     * @record
     */
    function ToastOptions() { }
    Toaster.ToastOptions = ToastOptions;
    if (false) {
        /** @type {?|undefined} */
        ToastOptions.prototype.life;
        /** @type {?|undefined} */
        ToastOptions.prototype.sticky;
        /** @type {?|undefined} */
        ToastOptions.prototype.closable;
        /** @type {?|undefined} */
        ToastOptions.prototype.tapToDismiss;
        /** @type {?|undefined} */
        ToastOptions.prototype.messageLocalizationParams;
        /** @type {?|undefined} */
        ToastOptions.prototype.titleLocalizationParams;
        /** @type {?} */
        ToastOptions.prototype.id;
        /** @type {?|undefined} */
        ToastOptions.prototype.containerKey;
    }
    /**
     * @record
     */
    function Toast() { }
    Toaster.Toast = Toast;
    if (false) {
        /** @type {?} */
        Toast.prototype.message;
        /** @type {?|undefined} */
        Toast.prototype.title;
        /** @type {?|undefined} */
        Toast.prototype.severity;
        /** @type {?|undefined} */
        Toast.prototype.options;
    }
    /**
     * @deprecated Status will be removed from toaster model in v3.0
     */
    var Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Toaster.Status || (Toaster.Status = {}));
})(Toaster || (Toaster = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToasterService = /** @class */ (function () {
    function ToasterService(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.toasts$ = new ReplaySubject(1);
        this.lastId = -1;
        this.toasts = (/** @type {?} */ ([]));
    }
    /**
     * @private
     * @return {?}
     */
    ToasterService.prototype.setContainer = /**
     * @private
     * @return {?}
     */
    function () {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, { toasts$: this.toasts$ }));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * Creates an info toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates an info toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.info = /**
     * Creates an info toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'info', options);
    };
    /**
     * Creates a success toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates a success toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.success = /**
     * Creates a success toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'success', options);
    };
    /**
     * Creates a warning toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates a warning toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.warn = /**
     * Creates a warning toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'warning', options);
    };
    /**
     * Creates an error toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates an error toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.error = /**
     * Creates an error toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'error', options);
    };
    /**
     * Creates a toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param severity Sets color of the toast. "success", "warning" etc.
     * @param options Spesific style or structural options for individual toast
     */
    /**
     * Creates a toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} severity Sets color of the toast. "success", "warning" etc.
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    ToasterService.prototype.show = /**
     * Creates a toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} severity Sets color of the toast. "success", "warning" etc.
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    function (message, title, severity, options) {
        if (title === void 0) { title = null; }
        if (severity === void 0) { severity = 'neutral'; }
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        if (!this.containerComponentRef)
            this.setContainer();
        /** @type {?} */
        var id = ++this.lastId;
        this.toasts.push({
            message: message,
            title: title,
            severity: severity,
            options: __assign({ closable: true, id: id }, options),
        });
        this.toasts$.next(this.toasts);
        return id;
    };
    /**
     * Removes the toast with given id.
     * @param id ID of the toast to be removed.
     */
    /**
     * Removes the toast with given id.
     * @param {?} id ID of the toast to be removed.
     * @return {?}
     */
    ToasterService.prototype.remove = /**
     * Removes the toast with given id.
     * @param {?} id ID of the toast to be removed.
     * @return {?}
     */
    function (id) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) { return snq((/**
         * @return {?}
         */
        function () { return toast.options.id; })) !== id; }));
        this.toasts$.next(this.toasts);
    };
    /**
     * Removes all open toasts at once.
     */
    /**
     * Removes all open toasts at once.
     * @param {?=} key
     * @return {?}
     */
    ToasterService.prototype.clear = /**
     * Removes all open toasts at once.
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        this.toasts = !key
            ? []
            : this.toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            function (toast) { return snq((/**
             * @return {?}
             */
            function () { return toast.options.containerKey; })) !== key; }));
        this.toasts$.next(this.toasts);
    };
    ToasterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return [
        { type: ContentProjectionService }
    ]; };
    /** @nocollapse */ ToasterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(ɵɵinject(ContentProjectionService)); }, token: ToasterService, providedIn: "root" });
    return ToasterService;
}());
if (false) {
    /** @type {?} */
    ToasterService.prototype.toasts$;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.lastId;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.toasts;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.contentProjectionService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService, localizationService) {
        this.toastService = toastService;
        this.localizationService = localizationService;
    }
    Object.defineProperty(ToastComponent.prototype, "severityClass", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.toast || !this.toast.severity)
                return '';
            return "toast-" + this.toast.severity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "iconClass", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.toast.severity) {
                case 'success':
                    return 'fa-check-circle';
                case 'info':
                    return 'fa-info-circle';
                case 'warning':
                    return 'fa-exclamation-triangle';
                case 'error':
                    return 'fa-times-circle';
                default:
                    return 'fa-exclamation-circle';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (snq((/**
         * @return {?}
         */
        function () { return _this.toast.options.sticky; })))
            return;
        /** @type {?} */
        var timeout = snq((/**
         * @return {?}
         */
        function () { return _this.toast.options.life; })) || 5000;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.close();
        }), timeout);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.toastService.remove(this.toast.options.id);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.tap = /**
     * @return {?}
     */
    function () {
        if (this.toast.options && this.toast.options.tapToDismiss)
            this.close();
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-toast',
                    template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
                    styles: [".toast{display:-ms-grid;display:grid;-ms-grid-columns:50px 1fr;grid-template-columns:50px 1fr;gap:10px;margin:5px 0;padding:10px;border-radius:0;width:350px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 0 10px -5px rgba(0,0,0,.4);z-index:9999;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px rgba(0,0,0,.4);opacity:1}.toast:hover{border:2px solid #e3e3e3;background-color:#e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{border:2px solid #51a351;background-color:#51a351;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-success:hover{border:2px solid #499249;background-color:#499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{border:2px solid #2f96b4;background-color:#2f96b4;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-info:hover{border:2px solid #2a85a0;background-color:#2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{border:2px solid #f89406;background-color:#f89406;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-warning:hover{border:2px solid #df8505;background-color:#df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{border:2px solid #bd362f;background-color:#bd362f;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-error:hover{border:2px solid #a9302a;background-color:#a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{display:flex;align-items:center;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:25px;border:none;border-radius:50%;background:0 0;color:inherit}.toast .toast-content .toast-close-button:focus{outline:0}.toast .toast-content .toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}.toast .toast-content .toast-message{margin:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToasterService },
        { type: LocalizationService }
    ]; };
    ToastComponent.propDecorators = {
        toast: [{ type: Input }]
    };
    return ToastComponent;
}());
if (false) {
    /** @type {?} */
    ToastComponent.prototype.toast;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.toastService;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.localizationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = "\n.is-invalid .form-control {\n  border-color: #dc3545;\n  border-style: solid !important;\n}\n\n.is-invalid .invalid-feedback,\n.is-invalid + * .invalid-feedback {\n  display: block;\n}\n\n.data-tables-filter {\n  text-align: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.navbar .dropdown-submenu a::after {\n  transform: rotate(-90deg);\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.navbar .dropdown-menu {\n  min-width: 215px;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar {\n  height: 5px !important;\n  width: 5px !important;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.abp-ellipsis-inline {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-ellipsis {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ui-widget-overlay {\n  z-index: 1000;\n}\n\n.color-white {\n  color: #FFF !important;\n}\n\n.custom-checkbox > label {\n  cursor: pointer;\n}\n\n/* <animations */\n\n.fade-in-top {\n  animation: fadeInTop 0.2s ease-in-out;\n}\n\n.fade-out-top {\n  animation: fadeOutTop 0.2s ease-in-out;\n}\n\n.abp-collapsed-height {\n  -moz-transition: max-height linear 0.35s;\n  -ms-transition: max-height linear 0.35s;\n  -o-transition: max-height linear 0.35s;\n  -webkit-transition: max-height linear 0.35s;\n  overflow:hidden;\n  transition:max-height 0.35s linear;\n  height:auto;\n  max-height: 0;\n}\n\n.abp-mh-25 {\n  max-height: 25vh;\n}\n\n.abp-mh-50 {\n  transition:max-height 0.65s linear;\n  max-height: 50vh;\n}\n\n.abp-mh-75 {\n  transition:max-height 0.85s linear;\n  max-height: 75vh;\n}\n\n.abp-mh-100 {\n  transition:max-height 1s linear;\n  max-height: 100vh;\n}\n\n[class^=\"sorting\"] {\n  opacity: .3;\n  cursor: pointer;\n}\n[class^=\"sorting\"]:before {\n  right: 0.5rem;\n  content: \"\u2191\";\n}\n[class^=\"sorting\"]:after {\n  right: 0.5rem;\n  content: \"\u2193\";\n}\n\n.sorting_desc {\n  opacity: 1;\n}\n.sorting_desc:before {\n  opacity: .3;\n}\n\n.sorting_asc {\n  opacity: 1;\n}\n.sorting_asc:after {\n  opacity: .3;\n}\n\n@keyframes fadeInTop {\n  from {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutTop {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n\n/* </animations */\n\n";

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingDirective = /** @class */ (function () {
    function LoadingDirective(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
        this.delay = 0;
    }
    Object.defineProperty(LoadingDirective.prototype, "loading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!newValue && _this.timerSubscription) {
                    _this.timerSubscription.unsubscribe();
                    _this.timerSubscription = null;
                    _this._loading = newValue;
                    if (_this.rootNode) {
                        _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                        _this.rootNode = null;
                    }
                    return;
                }
                _this.timerSubscription = timer(_this.delay)
                    .pipe(take(1))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.componentRef) {
                        _this.componentRef = _this.cdRes
                            .resolveComponentFactory(LoadingComponent)
                            .create(_this.injector);
                    }
                    if (newValue && !_this.rootNode) {
                        _this.rootNode = ((/** @type {?} */ (_this.componentRef.hostView))).rootNodes[0];
                        _this.targetElement.appendChild(_this.rootNode);
                    }
                    else if (_this.rootNode) {
                        _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                        _this.rootNode = null;
                    }
                    _this._loading = newValue;
                    _this.timerSubscription = null;
                }));
            }), 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoadingDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.targetElement) {
            var _a = this.elRef.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                this.targetElement = (/** @type {?} */ (this.elRef.nativeElement.children[0]));
            }
            else {
                this.targetElement = this.elRef.nativeElement;
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    };
    LoadingDirective.decorators = [
        { type: Directive, args: [{ selector: '[abpLoading]' },] }
    ];
    /** @nocollapse */
    LoadingDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: Renderer2 }
    ]; };
    LoadingDirective.propDecorators = {
        position: [{ type: HostBinding, args: ['style.position',] }],
        loading: [{ type: Input, args: ['abpLoading',] }],
        targetElement: [{ type: Input, args: ['abpLoadingTargetElement',] }],
        delay: [{ type: Input, args: ['abpLoadingDelay',] }]
    };
    return LoadingDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype._loading;
    /** @type {?} */
    LoadingDirective.prototype.position;
    /** @type {?} */
    LoadingDirective.prototype.targetElement;
    /** @type {?} */
    LoadingDirective.prototype.delay;
    /** @type {?} */
    LoadingDirective.prototype.componentRef;
    /** @type {?} */
    LoadingDirective.prototype.rootNode;
    /** @type {?} */
    LoadingDirective.prototype.timerSubscription;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.cdRes;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/table-sort.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableSortOptions() { }
if (false) {
    /** @type {?} */
    TableSortOptions.prototype.key;
    /** @type {?} */
    TableSortOptions.prototype.order;
}
var TableSortDirective = /** @class */ (function () {
    function TableSortDirective(abpTable, sortPipe, cdRef) {
        this.abpTable = abpTable;
        this.sortPipe = sortPipe;
        this.cdRef = cdRef;
        this.value = [];
    }
    Object.defineProperty(TableSortDirective.prototype, "table", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return (this.abpTable || snq((/**
             * @return {?}
             */
            function () { return _this.cdRef['_view'].component; })) || snq((/**
             * @return {?}
             */
            function () { return _this.cdRef['context']; })) // 'context' for ivy
            );
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} __0
     * @return {?}
     */
    TableSortDirective.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var value = _a.value, abpTableSort = _a.abpTableSort;
        if (this.table && (value || abpTableSort)) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
            this.table.value = this.sortPipe.transform(clone(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    };
    TableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpTableSort]',
                    providers: [SortPipe],
                },] }
    ];
    /** @nocollapse */
    TableSortDirective.ctorParameters = function () { return [
        { type: TableComponent, decorators: [{ type: Host }, { type: Optional }, { type: Self }] },
        { type: SortPipe },
        { type: ChangeDetectorRef }
    ]; };
    TableSortDirective.propDecorators = {
        abpTableSort: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TableSortDirective;
}());
if (false) {
    /** @type {?} */
    TableSortDirective.prototype.abpTableSort;
    /** @type {?} */
    TableSortDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.abpTable;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.sortPipe;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.cdRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ERROR_MESSAGES = {
    defaultError: {
        title: 'An error has occurred!',
        details: 'Error detail not sent by server.',
    },
    defaultError401: {
        title: 'You are not authenticated!',
        details: 'You should be authenticated (sign in) in order to perform this operation.',
    },
    defaultError403: {
        title: 'You are not authorized!',
        details: 'You are not allowed to perform this operation.',
    },
    defaultError404: {
        title: 'Resource not found!',
        details: 'The resource requested could not found on the server.',
    },
    defaultError500: {
        title: 'Internal server error',
        details: 'Error detail not sent by server.',
    },
};
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.filterRestErrors = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var status = _a.status;
            if (typeof status !== 'number')
                return false;
            return _this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return code === status; })) < 0;
        });
        this.filterRouteErrors = (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            return (snq((/**
             * @return {?}
             */
            function () { return instance.event.error.indexOf('Cannot match') > -1; })) &&
                _this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
                 * @param {?} code
                 * @return {?}
                 */
                function (code) { return code === 404; })) < 0);
        });
        this.listenToRestError();
        this.listenToRouterError();
        this.listenToRouterDataResolved();
    }
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRouterError = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RouterError), filter(this.filterRouteErrors))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.show404Page(); }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRouterDataResolved = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RouterDataResolved), filter((/**
         * @return {?}
         */
        function () { return !!_this.componentRef; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRestError = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RestOccurError), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), filter(this.filterRestErrors))
            .subscribe((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            /** @type {?} */
            var body = snq((/**
             * @return {?}
             */
            function () { return err.error.error; }), DEFAULT_ERROR_MESSAGES.defaultError.title);
            if (err instanceof HttpErrorResponse && err.headers.get('_AbpErrorFormat')) {
                /** @type {?} */
                var confirmation$ = _this.showError(null, null, body);
                if (err.status === 401) {
                    confirmation$.subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.navigateToLogin();
                    }));
                }
            }
            else {
                switch (err.status) {
                    case 401:
                        _this.canCreateCustomError(401)
                            ? _this.show401Page()
                            : _this.showError({
                                key: 'AbpAccount::DefaultErrorMessage401',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                            }, {
                                key: 'AbpAccount::DefaultErrorMessage401Detail',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                            }).subscribe((/**
                             * @return {?}
                             */
                            function () { return _this.navigateToLogin(); }));
                        break;
                    case 403:
                        _this.createErrorComponent({
                            title: {
                                key: 'AbpAccount::DefaultErrorMessage403',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title,
                            },
                            details: {
                                key: 'AbpAccount::DefaultErrorMessage403Detail',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details,
                            },
                            status: 403,
                        });
                        break;
                    case 404:
                        _this.canCreateCustomError(404)
                            ? _this.show404Page()
                            : _this.showError({
                                key: 'AbpAccount::DefaultErrorMessage404',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                            }, {
                                key: 'AbpAccount::DefaultErrorMessage404Detail',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                            });
                        break;
                    case 500:
                        _this.createErrorComponent({
                            title: {
                                key: 'AbpAccount::500Message',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title,
                            },
                            details: {
                                key: 'AbpAccount::InternalServerErrorMessage',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details,
                            },
                            status: 500,
                        });
                        break;
                    case 0:
                        if (err.statusText === 'Unknown Error') {
                            _this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::DefaultErrorMessage',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                },
                                details: err.message,
                                isHomeShow: false,
                            });
                        }
                        break;
                    default:
                        _this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                        break;
                }
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show401Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show404Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    };
    /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    ErrorHandler.prototype.showError = /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    function (message, title, body) {
        if (body) {
            if (body.details) {
                message = body.details;
                title = body.message;
            }
            else if (body.message) {
                title = DEFAULT_ERROR_MESSAGES.defaultError.title;
                message = body.message;
            }
            else {
                message = body.message || DEFAULT_ERROR_MESSAGES.defaultError.title;
            }
        }
        return this.confirmationService.error(message, title, {
            hideCancelBtn: true,
            yesText: 'AbpAccount::Close',
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.navigateToLogin = /**
     * @private
     * @return {?}
     */
    function () {
        this.store.dispatch(new Navigate(['/account/login'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState.url) },
        }));
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    ErrorHandler.prototype.createErrorComponent = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        /** @type {?} */
        var renderer = this.rendererFactory.createRenderer(null, null);
        /** @type {?} */
        var host = renderer.selectRootElement(document.body, true);
        this.componentRef = this.cfRes
            .resolveComponentFactory(HttpErrorWrapperComponent)
            .create(this.injector);
        for (var key in instance) {
            /* istanbul ignore else */
            if (this.componentRef.instance.hasOwnProperty(key)) {
                this.componentRef.instance[key] = instance[key];
            }
        }
        this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;
        if (this.canCreateCustomError((/** @type {?} */ (instance.status)))) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.appRef = this.appRef;
            this.componentRef.instance.injector = this.injector;
            this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
        }
        this.appRef.attachView(this.componentRef.hostView);
        renderer.appendChild(host, ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]);
        /** @type {?} */
        var destroy$ = new Subject();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ErrorHandler.prototype.canCreateCustomError = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return snq((/**
         * @return {?}
         */
        function () {
            return _this.httpErrorConfig.errorScreen.component &&
                _this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1;
        }));
    };
    ErrorHandler.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ErrorHandler.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: ConfirmationService },
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: RendererFactory2 },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: ['HTTP_ERROR_CONFIG',] }] }
    ]; };
    /** @nocollapse */ ErrorHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(ConfirmationService), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(RendererFactory2), ɵɵinject(INJECTOR), ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
    return ErrorHandler;
}());
if (false) {
    /** @type {?} */
    ErrorHandler.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.filterRestErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.filterRouteErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.cfRes;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.rendererFactory;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.httpErrorConfig;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/append-content.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var THEME_SHARED_APPEND_CONTENT = new InjectionToken('THEME_SHARED_APPEND_CONTENT', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var domInsertion = inject(DomInsertionService);
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        import('chart.js').then((/**
         * @return {?}
         */
        function () { return chartJsLoaded$.next(true); }));
    }),
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/http-error.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} config
 * @return {?}
 */
function httpErrorConfigFactory(config) {
    if (config === void 0) { config = (/** @type {?} */ ({})); }
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return (/** @type {?} */ (__assign({ skipHandledErrorCodes: [], errorScreen: {} }, config)));
}
/** @type {?} */
var HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-parser-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */
function toInteger(value) {
    return parseInt("" + value, 10);
}
var DateParserFormatter = /** @class */ (function (_super) {
    __extends(DateParserFormatter, _super);
    function DateParserFormatter(datePipe) {
        var _this = _super.call(this) || this;
        _this.datePipe = datePipe;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DateParserFormatter.prototype.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 &&
                isNumber(dateParts[0]) &&
                isNumber(dateParts[1]) &&
                isNumber(dateParts[2])) {
                return {
                    year: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    day: toInteger(dateParts[2]),
                };
            }
        }
        return null;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateParserFormatter.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date && this.datePipe) {
            return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'shortDate');
        }
        else {
            return date
                ? date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '')
                : '';
        }
    };
    DateParserFormatter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DateParserFormatter.ctorParameters = function () { return [
        { type: DatePipe, decorators: [{ type: Optional }] }
    ]; };
    return DateParserFormatter;
}(NgbDateParserFormatter));
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateParserFormatter.prototype.datePipe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * @deprecated To be deleted in v2.6
 *
 * @param {?} injector
 * @return {?}
 */
function appendScript(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        import('chart.js').then((/**
         * @return {?}
         */
        function () { return chartJsLoaded$.next(true); }));
        /** @type {?} */
        var lazyLoadService = injector.get(LazyLoadService);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
    });
    return fn;
}
var ThemeSharedModule = /** @class */ (function () {
    function ThemeSharedModule(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ThemeSharedModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        return {
            ngModule: ThemeSharedModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [THEME_SHARED_APPEND_CONTENT],
                    useFactory: noop,
                },
                { provide: HTTP_ERROR_CONFIG, useValue: options.httpErrorConfig },
                {
                    provide: 'HTTP_ERROR_CONFIG',
                    useFactory: httpErrorConfigFactory,
                    deps: [HTTP_ERROR_CONFIG],
                },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter },
            ],
        };
    };
    ThemeSharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CoreModule, NgxValidateCoreModule, NgbPaginationModule],
                    declarations: [
                        BreadcrumbComponent,
                        ButtonComponent,
                        ChartComponent,
                        ConfirmationComponent,
                        HttpErrorWrapperComponent,
                        LoaderBarComponent,
                        LoadingComponent,
                        ModalComponent,
                        ModalContainerComponent,
                        PaginationComponent,
                        TableComponent,
                        TableEmptyMessageComponent,
                        ToastComponent,
                        ToastContainerComponent,
                        SortOrderIconComponent,
                        LoadingDirective,
                        TableSortDirective,
                    ],
                    exports: [
                        BreadcrumbComponent,
                        ButtonComponent,
                        ChartComponent,
                        ConfirmationComponent,
                        LoaderBarComponent,
                        LoadingComponent,
                        ModalComponent,
                        PaginationComponent,
                        TableComponent,
                        TableEmptyMessageComponent,
                        ToastComponent,
                        ToastContainerComponent,
                        SortOrderIconComponent,
                        LoadingDirective,
                        TableSortDirective,
                    ],
                    providers: [DatePipe],
                    entryComponents: [
                        HttpErrorWrapperComponent,
                        LoadingComponent,
                        ModalContainerComponent,
                        ToastContainerComponent,
                        ConfirmationComponent,
                    ],
                },] }
    ];
    /** @nocollapse */
    ThemeSharedModule.ctorParameters = function () { return [
        { type: ErrorHandler }
    ]; };
    return ThemeSharedModule;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeSharedModule.prototype.errorHandler;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/bounce.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var bounceIn = animation([
    style({ opacity: '0', display: '{{ display }}' }),
    animate('{{ time}} {{ easing }}', keyframes([
        style({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
        style({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
        style({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
    ]))
], {
    params: {
        time: '350ms',
        easing: 'cubic-bezier(.7,.31,.72,1.47)',
        display: 'block',
        transform: 'translate(-50%, -50%)'
    }
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/collapse.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var collapseY = animation([
    style({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var collapseYWithMargin = animation([
    style({ 'margin-top': '0' }),
    animate('{{ time }} {{ easing }}', style({ 'margin-left': '-100%' })),
], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
var collapseX = animation([
    style({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var expandY = animation([
    style({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var expandYWithMargin = animation([
    style({ 'margin-top': '-100%' }),
    animate('{{ time }} {{ easing }}', style({ 'margin-top': '0' })),
], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
var expandX = animation([
    style({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var collapse = trigger('collapse', [
    state('collapsed', style({ height: '0', overflow: 'hidden' })),
    state('expanded', style({ height: '*', overflow: 'hidden' })),
    transition('expanded => collapsed', useAnimation(collapseY)),
    transition('collapsed => expanded', useAnimation(expandY)),
]);
/** @type {?} */
var collapseWithMargin = trigger('collapseWithMargin', [
    state('collapsed', style({ 'margin-top': '-100%' })),
    state('expanded', style({ 'margin-top': '0' })),
    transition('expanded => collapsed', useAnimation(collapseYWithMargin), {
        params: { time: '400ms', easing: 'linear' },
    }),
    transition('collapsed => expanded', useAnimation(expandYWithMargin)),
]);
/** @type {?} */
var collapseLinearWithMargin = trigger('collapseLinearWithMargin', [
    state('collapsed', style({ 'margin-top': '-100vh' })),
    state('expanded', style({ 'margin-top': '0' })),
    transition('expanded => collapsed', useAnimation(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
    transition('collapsed => expanded', useAnimation(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/slide.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var slideFromBottom = trigger('slideFromBottom', [
    transition('* <=> *', [
        style({ 'margin-top': '20px', opacity: '0' }),
        animate('0.2s ease-out', style({ opacity: '1', 'margin-top': '0px' })),
    ]),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RootParams() { }
if (false) {
    /** @type {?} */
    RootParams.prototype.httpErrorConfig;
}
/**
 * @record
 */
function HttpErrorConfig() { }
if (false) {
    /** @type {?|undefined} */
    HttpErrorConfig.prototype.skipHandledErrorCodes;
    /** @type {?|undefined} */
    HttpErrorConfig.prototype.errorScreen;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/setting-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SettingTab() { }
if (false) {
    /** @type {?} */
    SettingTab.prototype.component;
    /** @type {?} */
    SettingTab.prototype.name;
    /** @type {?} */
    SettingTab.prototype.order;
    /** @type {?|undefined} */
    SettingTab.prototype.requiredPolicy;
}
/** @type {?} */
var SETTING_TABS = (/** @type {?} */ ([]));
/**
 * @param {?} tab
 * @return {?}
 */
function addSettingTab(tab) {
    if (!Array.isArray(tab)) {
        tab = [tab];
    }
    SETTING_TABS.push.apply(SETTING_TABS, __spread(tab));
}
/**
 * @return {?}
 */
function getSettingTabs() {
    return SETTING_TABS;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/statistics.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Statistics;
(function (Statistics) {
    /**
     * @record
     */
    function Response() { }
    Statistics.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.data;
    }
    /**
     * @record
     */
    function Data() { }
    Statistics.Data = Data;
    /**
     * @record
     */
    function Filter() { }
    Statistics.Filter = Filter;
    if (false) {
        /** @type {?} */
        Filter.prototype.startDate;
        /** @type {?} */
        Filter.prototype.endDate;
    }
})(Statistics || (Statistics = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/validation-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var minLength = Validators.minLength, maxLength = Validators.maxLength;
/**
 * @param {?} store
 * @return {?}
 */
function getPasswordValidators(store) {
    /** @type {?} */
    var getRule = getRuleFn(store);
    /** @type {?} */
    var passwordRulesArr = (/** @type {?} */ ([]));
    /** @type {?} */
    var requiredLength = 1;
    if (getRule('RequireDigit') === 'true') {
        passwordRulesArr.push('number');
    }
    if (getRule('RequireLowercase') === 'true') {
        passwordRulesArr.push('small');
    }
    if (getRule('RequireUppercase') === 'true') {
        passwordRulesArr.push('capital');
    }
    if (getRule('RequireNonAlphanumeric') === 'true') {
        passwordRulesArr.push('special');
    }
    if (Number.isInteger(+getRule('RequiredLength'))) {
        requiredLength = +getRule('RequiredLength');
    }
    return [validatePassword(passwordRulesArr), minLength(requiredLength), maxLength(128)];
}
/**
 * @param {?} store
 * @return {?}
 */
function getRuleFn(store) {
    return (/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var passwordRules = store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        return (passwordRules["Abp.Identity.Password." + key] || '').toLowerCase();
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.theme.shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BreadcrumbComponent, ButtonComponent, ChartComponent, Confirmation, ConfirmationComponent, ConfirmationService, DEFAULT_ERROR_MESSAGES, DateParserFormatter, ErrorHandler, HTTP_ERROR_CONFIG, LoaderBarComponent, LoadingComponent, LoadingDirective, ModalComponent, ModalService, PaginationComponent, SortOrderIconComponent, THEME_SHARED_APPEND_CONTENT, TableComponent, TableEmptyMessageComponent, TableSortDirective, ThemeSharedModule, ToastComponent, Toaster, ToasterService, addSettingTab, appendScript, bounceIn, chartJsLoaded$, collapse, collapseLinearWithMargin, collapseWithMargin, collapseX, collapseY, collapseYWithMargin, dialogAnimation, expandX, expandY, expandYWithMargin, fadeAnimation, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp, getPasswordValidators, getRandomBackgroundColor, getSettingTabs, httpErrorConfigFactory, slideFromBottom, toastInOut, BreadcrumbComponent as ɵa, ButtonComponent as ɵb, THEME_SHARED_APPEND_CONTENT as ɵba, httpErrorConfigFactory as ɵbb, HTTP_ERROR_CONFIG as ɵbc, DateParserFormatter as ɵbd, ChartComponent as ɵc, ConfirmationComponent as ɵd, HttpErrorWrapperComponent as ɵe, LoaderBarComponent as ɵf, LoadingComponent as ɵg, ModalComponent as ɵh, fadeAnimation as ɵi, fadeIn as ɵj, fadeOut as ɵk, ModalService as ɵl, ConfirmationService as ɵm, ModalContainerComponent as ɵn, PaginationComponent as ɵo, TableComponent as ɵp, TableEmptyMessageComponent as ɵq, ToastComponent as ɵr, ToasterService as ɵs, ToastContainerComponent as ɵt, toastInOut as ɵu, SortOrderIconComponent as ɵv, LoadingDirective as ɵw, TableSortDirective as ɵx, ErrorHandler as ɵy };
//# sourceMappingURL=abp-ng.theme.shared.js.map
