/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AuthService, SetRemember, ConfigState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import snq from 'snq';
const { maxLength, minLength, required } = Validators;
export class LoginComponent {
    /**
     * @param {?} fb
     * @param {?} oauthService
     * @param {?} store
     * @param {?} toasterService
     * @param {?} authService
     */
    constructor(fb, oauthService, store, toasterService, authService) {
        this.fb = fb;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isSelfRegistrationEnabled =
            (((/** @type {?} */ (this.store.selectSnapshot(ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled'))))) || '').toLowerCase() !== 'false';
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, maxLength(128)]],
            remember: [false],
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.authService
            .login(this.form.get('username').value, this.form.get('password').value)
            .pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.toasterService.error(snq((/**
             * @return {?}
             */
            () => err.error.error_description)) ||
                snq((/**
                 * @return {?}
                 */
                () => err.error.error.message), 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        })), finalize((/**
         * @return {?}
         */
        () => (this.inProgress = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.store.dispatch(new SetRemember(this.form.get('remember').value));
        }));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-login',
                template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef },\r\n      cancelContentRef: { value: cancelContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n  [cancelContentRef]=\"cancelContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r\n  <strong *ngIf=\"isSelfRegistrationEnabled\">\r\n    {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{\r\n      'AbpAccount::Register' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-user-name-or-email-address\">{{\r\n        'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        id=\"login-input-user-name-or-email-address\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n        autofocus\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"password\"\r\n        id=\"login-input-password\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-check\" validationTarget validationStyle>\r\n      <label class=\"form-check-label\" for=\"login-input-remember-me\">\r\n        <input\r\n          class=\"form-check-input\"\r\n          type=\"checkbox\"\r\n          id=\"login-input-remember-me\"\r\n          formControlName=\"remember\"\r\n        />\r\n        {{ 'AbpAccount::RememberMe' | abpLocalization }}\r\n      </label>\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Login' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n<ng-template #cancelContentRef>\r\n  <div class=\"card-footer text-center border-0\">\r\n    <a routerLink=\"/\">\r\n      <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\r\n        {{ 'AbpAccount::Cancel' | abpLocalization }}\r\n      </button>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n"
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OAuthService },
    { type: Store },
    { type: ToasterService },
    { type: AuthService }
];
if (false) {
    /** @type {?} */
    LoginComponent.prototype.form;
    /** @type {?} */
    LoginComponent.prototype.inProgress;
    /** @type {?} */
    LoginComponent.prototype.isSelfRegistrationEnabled;
    /** @type {?} */
    LoginComponent.prototype.authWrapperKey;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.oauthService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.toasterService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5hY2NvdW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztNQUdoQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsVUFBVTtBQU1yRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7SUFTekIsWUFDVSxFQUFlLEVBQ2YsWUFBMEIsRUFDMUIsS0FBWSxFQUNaLGNBQThCLEVBQzlCLFdBQXdCO1FBSnhCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVGxDLDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUVqQyxtQkFBYyxvREFBa0M7SUFRN0MsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCO1lBQzVCLENBQ0UsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDeEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUNoRSxFQUFVLENBQUMsSUFBSSxFQUFFLENBQ25CLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVc7YUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN2RSxJQUFJLENBQ0gsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQ3ZCLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUM7Z0JBQ3BDLEdBQUc7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUUsaUNBQWlDLENBQUMsRUFDdkUsT0FBTyxFQUNQLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUNmLENBQUM7WUFDRixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsRUFDRixRQUFROzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FDMUM7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsZ21GQUFxQzthQUN0Qzs7OztZQWJRLFdBQVc7WUFFWCxZQUFZO1lBRFosS0FBSztZQUhMLGNBQWM7WUFEZCxXQUFXOzs7O0lBa0JsQiw4QkFBZ0I7O0lBRWhCLG9DQUFvQjs7SUFFcEIsbURBQWlDOztJQUVqQyx3Q0FBZ0Q7Ozs7O0lBRzlDLDRCQUF1Qjs7Ozs7SUFDdkIsc0NBQWtDOzs7OztJQUNsQywrQkFBb0I7Ozs7O0lBQ3BCLHdDQUFzQzs7Ozs7SUFDdEMscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFNldFJlbWVtYmVyLCBDb25maWdTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgZUFjY291bnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCB7IG1heExlbmd0aCwgbWluTGVuZ3RoLCByZXF1aXJlZCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgaW5Qcm9ncmVzczogYm9vbGVhbjtcclxuXHJcbiAgaXNTZWxmUmVnaXN0cmF0aW9uRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gIGF1dGhXcmFwcGVyS2V5ID0gZUFjY291bnRDb21wb25lbnRzLkF1dGhXcmFwcGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBvYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc1NlbGZSZWdpc3RyYXRpb25FbmFibGVkID1cclxuICAgICAgKFxyXG4gICAgICAgICh0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICAgICAgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZygnQWJwLkFjY291bnQuSXNTZWxmUmVnaXN0cmF0aW9uRW5hYmxlZCcpLFxyXG4gICAgICAgICkgYXMgc3RyaW5nKSB8fCAnJ1xyXG4gICAgICApLnRvTG93ZXJDYXNlKCkgIT09ICdmYWxzZSc7XHJcblxyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHVzZXJuYW1lOiBbJycsIFtyZXF1aXJlZCwgbWF4TGVuZ3RoKDI1NSldXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgW3JlcXVpcmVkLCBtYXhMZW5ndGgoMTI4KV1dLFxyXG4gICAgICByZW1lbWJlcjogW2ZhbHNlXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgdGhpcy5hdXRoU2VydmljZVxyXG4gICAgICAubG9naW4odGhpcy5mb3JtLmdldCgndXNlcm5hbWUnKS52YWx1ZSwgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihcclxuICAgICAgICAgICAgc25xKCgpID0+IGVyci5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbikgfHxcclxuICAgICAgICAgICAgICBzbnEoKCkgPT4gZXJyLmVycm9yLmVycm9yLm1lc3NhZ2UsICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyksXHJcbiAgICAgICAgICAgICdFcnJvcicsXHJcbiAgICAgICAgICAgIHsgbGlmZTogNzAwMCB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4gKHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlKSksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0UmVtZW1iZXIodGhpcy5mb3JtLmdldCgncmVtZW1iZXInKS52YWx1ZSkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19