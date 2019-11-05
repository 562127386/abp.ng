/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AbstractToaster } from '../abstracts/toaster';
import { MessageService } from 'primeng/components/common/messageservice';
import * as i0 from "@angular/core";
import * as i1 from "primeng/components/common/messageservice";
var ToasterService = /** @class */ (function (_super) {
    tslib_1.__extends(ToasterService, _super);
    function ToasterService(messageService) {
        var _this = _super.call(this, messageService) || this;
        _this.messageService = messageService;
        return _this;
    }
    /**
     * @param {?} messages
     * @return {?}
     */
    ToasterService.prototype.addAll = /**
     * @param {?} messages
     * @return {?}
     */
    function (messages) {
        var _this = this;
        this.messageService.addAll(messages.map((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return (tslib_1.__assign({ key: _this.key }, message)); })));
    };
    ToasterService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return [
        { type: MessageService }
    ]; };
    /** @nocollapse */ ToasterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(i0.ɵɵinject(i1.MessageService)); }, token: ToasterService, providedIn: "root" });
    return ToasterService;
}(AbstractToaster));
export { ToasterService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ToasterService.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7QUFFMUU7SUFDb0MsMENBQWU7SUFDakQsd0JBQXNCLGNBQThCO1FBQXBELFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRnFCLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjs7SUFFcEQsQ0FBQzs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sUUFBbUI7UUFBMUIsaUJBRUM7UUFEQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsb0JBQUcsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHLElBQUssT0FBTyxFQUFHLEVBQS9CLENBQStCLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O2dCQVJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBRnpCLGNBQWM7Ozt5QkFIdkI7Q0FjQyxBQVRELENBQ29DLGVBQWUsR0FRbEQ7U0FSWSxjQUFjOzs7Ozs7SUFDYix3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0VG9hc3RlciB9IGZyb20gJy4uL2Fic3RyYWN0cy90b2FzdGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ3ByaW1lbmcvY29tcG9uZW50cy9jb21tb24vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RlclNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdFRvYXN0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIGFkZEFsbChtZXNzYWdlczogTWVzc2FnZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZEFsbChtZXNzYWdlcy5tYXAobWVzc2FnZSA9PiAoeyBrZXk6IHRoaXMua2V5LCAuLi5tZXNzYWdlIH0pKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==