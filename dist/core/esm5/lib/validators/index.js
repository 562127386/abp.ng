/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
import { validateCreditCard } from './credit-card.validator';
import { validateRange } from './range.validator';
import { validateRequired } from './required.validator';
import { validateStringLength } from './string-length.validator';
import { validateUrl } from './url.validator';
export { validateCreditCard } from './credit-card.validator';
export { validateRange } from './range.validator';
export { validateRequired } from './required.validator';
export { validateStringLength } from './string-length.validator';
export { validateUrl } from './url.validator';
var ɵ0 = /**
 * @return {?}
 */
function () { return Validators.email; };
/** @type {?} */
export var AbpValidators = {
    creditCard: validateCreditCard,
    emailAddress: (ɵ0),
    range: validateRange,
    required: validateRequired,
    stringLength: validateStringLength,
    url: validateUrl,
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLG1DQUFjLHlCQUF5QixDQUFDO0FBQ3hDLDhCQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGlDQUFjLHNCQUFzQixDQUFDO0FBQ3JDLHFDQUFjLDJCQUEyQixDQUFDO0FBQzFDLDRCQUFjLGlCQUFpQixDQUFDOzs7O0FBSWhCLGNBQU0sT0FBQSxVQUFVLENBQUMsS0FBSyxFQUFoQixDQUFnQjs7QUFGdEMsTUFBTSxLQUFPLGFBQWEsR0FBRztJQUMzQixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLFlBQVksTUFBd0I7SUFDcEMsS0FBSyxFQUFFLGFBQWE7SUFDcEIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLEdBQUcsRUFBRSxXQUFXO0NBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdmFsaWRhdGVDcmVkaXRDYXJkIH0gZnJvbSAnLi9jcmVkaXQtY2FyZC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVJhbmdlIH0gZnJvbSAnLi9yYW5nZS52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVJlcXVpcmVkIH0gZnJvbSAnLi9yZXF1aXJlZC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVN0cmluZ0xlbmd0aCB9IGZyb20gJy4vc3RyaW5nLWxlbmd0aC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVVybCB9IGZyb20gJy4vdXJsLnZhbGlkYXRvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY3JlZGl0LWNhcmQudmFsaWRhdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9yYW5nZS52YWxpZGF0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcXVpcmVkLnZhbGlkYXRvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nLWxlbmd0aC52YWxpZGF0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3VybC52YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFicFZhbGlkYXRvcnMgPSB7XHJcbiAgY3JlZGl0Q2FyZDogdmFsaWRhdGVDcmVkaXRDYXJkLFxyXG4gIGVtYWlsQWRkcmVzczogKCkgPT4gVmFsaWRhdG9ycy5lbWFpbCxcclxuICByYW5nZTogdmFsaWRhdGVSYW5nZSxcclxuICByZXF1aXJlZDogdmFsaWRhdGVSZXF1aXJlZCxcclxuICBzdHJpbmdMZW5ndGg6IHZhbGlkYXRlU3RyaW5nTGVuZ3RoLFxyXG4gIHVybDogdmFsaWRhdGVVcmwsXHJcbn07XHJcbiJdfQ==