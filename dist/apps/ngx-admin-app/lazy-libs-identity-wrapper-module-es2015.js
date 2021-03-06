(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-identity-wrapper-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/roles/roles.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/roles/roles.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <p-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpIdentity\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.name; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            {{ data.name\r\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n            }}</span>\r\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n            }}</span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n\r\n<!-- <abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'R' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visiblePermissions, twoWay: true },\r\n      hideBadges: { value: true }\r\n    },\r\n    outputs: { visibleChange: onVisiblePermissionChange },\r\n    componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visiblePermissions\"\r\n  [providerKey]=\"providerKey\"\r\n  [hideBadges]=\"true\"\r\n  providerName=\"R\"\r\n>\r\n</abp-permission-management> -->\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/users/users.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/users/users.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <p-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpIdentity\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  name=\"Roles[0].IsAssigned\"\r\n                  value=\"true\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/permission-management/src/lib/components/permission-management.component.html":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/permission-management.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n                >{{ group?.displayName }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [style.margin-left]=\"permission.margin + 'px'\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n");

/***/ }),

/***/ "../../packages/identity/src/lib/actions/identity.actions.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/actions/identity.actions.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GetRoles, GetRoleById, DeleteRole, CreateRole, UpdateRole, GetUsers, GetUserById, DeleteUser, CreateUser, UpdateUser, GetUserRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoles", function() { return GetRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoleById", function() { return GetRoleById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRole", function() { return DeleteRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRole", function() { return CreateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRole", function() { return UpdateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return GetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserById", function() { return GetUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRoles", function() { return GetUserRoles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class GetRoles {
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoles.type = '[Identity] Get Roles';
class GetRoleById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoleById.type = '[Identity] Get Role By Id';
class DeleteRole {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteRole.type = '[Identity] Delete Role';
class CreateRole {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateRole.type = '[Identity] Create Role';
class UpdateRole {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateRole.type = '[Identity] Update Role';
class GetUsers {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUsers.type = '[Identity] Get Users';
class GetUserById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserById.type = '[Identity] Get User By Id';
class DeleteUser {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteUser.type = '[Identity] Delete User';
class CreateUser {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateUser.type = '[Identity] Create User';
class UpdateUser {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateUser.type = '[Identity] Update User';
class GetUserRoles {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserRoles.type = '[Identity] Get User Roles';


/***/ }),

/***/ "../../packages/identity/src/lib/components/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UsersComponent, RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles/roles.component */ "../../packages/identity/src/lib/components/roles/roles.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__["RolesComponent"]; });

/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "../../packages/identity/src/lib/components/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]; });






/***/ }),

/***/ "../../packages/identity/src/lib/components/roles/roles.component.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/roles/roles.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");









let RolesComponent = class RolesComponent {
    constructor(confirmationService, fb, store) {
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.onVisiblePermissionChange = event => {
            this.visiblePermissions = event;
        };
    }
    ngOnInit() {
        this.get();
    }
    buildForm() {
        this.form = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256),
            ]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false],
        });
    }
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    add() {
        this.selected = {};
        this.openModal();
    }
    edit(id) {
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["GetRoleById"](id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('IdentityState', 'selectedRole'))
            .subscribe(selectedRole => {
            this.selected = selectedRole;
            this.openModal();
        });
    }
    save() {
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateRole"](Object.assign({}, this.selected, this.form.value, { id: this.selected.id }))
            : new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["CreateRole"](this.form.value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.isModalVisible = false;
            this.get();
        });
    }
    delete(id, name) {
        this.confirmationService
            .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((status) => {
            if (status === "confirm" /* confirm */) {
                this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteRole"](id)).subscribe(() => this.get());
            }
        });
    }
    onPageChange(data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    }
    get() {
        this.loading = true;
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["GetRoles"](this.pageQuery))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loading = false)))
            .subscribe();
    }
    onClickSaveButton() {
        this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
};
RolesComponent.ctorParameters = () => [
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_8__["IdentityState"].getRoles),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], RolesComponent.prototype, "data$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_8__["IdentityState"].getRolesTotalCount),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], RolesComponent.prototype, "totalCount$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('formRef', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], RolesComponent.prototype, "formRef", void 0);
RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'abp-roles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roles.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/roles/roles.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
], RolesComponent);



/***/ }),

/***/ "../../packages/identity/src/lib/components/users/users.component.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/users/users.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");












let UsersComponent = class UsersComponent {
    constructor(confirmationService, fb, store) {
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.passwordRulesArr = [];
        this.requiredPasswordLength = 1;
        this.trackByFn = (index, item) => Object.keys(item)[0] || index;
        this.onVisiblePermissionChange = event => {
            this.visiblePermissions = event;
        };
    }
    get roleGroups() {
        return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(() => this.form.get('roleNames').controls, []);
    }
    ngOnInit() {
        this.get();
        const passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getSettings('Identity.Password'));
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('capital');
        }
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            this.passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            this.requiredPasswordLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
    }
    onSearch(value) {
        this.pageQuery.filter = value;
        this.get();
    }
    buildForm() {
        this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetRoles"]()).subscribe(() => {
            this.roles = this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getRoles);
            this.form = this.fb.group({
                userName: [this.selected.userName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)]],
                email: [
                    this.selected.email || '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)],
                ],
                name: [this.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(64)]],
                surname: [this.selected.surname || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(64)]],
                phoneNumber: [this.selected.phoneNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)]],
                lockoutEnabled: [this.selected.lockoutEnabled || (this.selected.id ? false : true)],
                twoFactorEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
                roleNames: this.fb.array(this.roles.map(role => this.fb.group({
                    [role.name]: [
                        !!Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(() => this.selectedUserRoles.find(userRole => userRole.id === role.id)),
                    ],
                }))),
            });
            const passwordValidators = [
                Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(this.passwordRulesArr),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.requiredPasswordLength),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32),
            ];
            this.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [...passwordValidators]));
            if (!this.selected.userName) {
                this.form.get('password').setValidators([...passwordValidators, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                this.form.get('password').updateValueAndValidity();
            }
        });
    }
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    add() {
        this.selected = {};
        this.selectedUserRoles = [];
        this.openModal();
    }
    edit(id) {
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserById"](id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserRoles"](id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('IdentityState'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe((state) => {
            this.selected = state.selectedUser;
            this.selectedUserRoles = state.selectedUserRoles;
            this.openModal();
        });
    }
    save() {
        if (!this.form.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        const { roleNames } = this.form.value;
        const mappedRoleNames = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(() => roleNames.filter(role => !!role[Object.keys(role)[0]]).map(role => Object.keys(role)[0]), []);
        this.store
            .dispatch(this.selected.id
            ? new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateUser"](Object.assign({}, this.selected, this.form.value, { id: this.selected.id, roleNames: mappedRoleNames }))
            : new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["CreateUser"](Object.assign({}, this.form.value, { roleNames: mappedRoleNames })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.isModalVisible = false;
            this.get();
        });
    }
    delete(id, userName) {
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe((status) => {
            if (status === "confirm" /* confirm */) {
                this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["DeleteUser"](id)).subscribe(() => this.get());
            }
        });
    }
    onPageChange(data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    }
    get() {
        this.loading = true;
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUsers"](this.pageQuery))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => (this.loading = false)))
            .subscribe();
    }
};
UsersComponent.ctorParameters = () => [
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getUsers),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
], UsersComponent.prototype, "data$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getUsersTotalCount),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
], UsersComponent.prototype, "totalCount$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('modalContent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
], UsersComponent.prototype, "modalContent", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abp-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/users/users.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
], UsersComponent);



/***/ }),

/***/ "../../packages/identity/src/lib/identity-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/identity-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: IdentityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityRoutingModule", function() { return IdentityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/roles/roles.component */ "../../packages/identity/src/lib/components/roles/roles.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/users.component */ "../../packages/identity/src/lib/components/users/users.component.ts");






const routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
        children: [
            {
                path: 'roles',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: {
                    requiredPolicy: 'AbpIdentity.Roles',
                    replaceableComponent: {
                        key: 'Identity.RolesComponent',
                        defaultComponent: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"],
                    },
                },
            },
            {
                path: 'users',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: {
                    requiredPolicy: 'AbpIdentity.Users',
                    replaceableComponent: {
                        key: 'Identity.UsersComponent',
                        defaultComponent: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                    },
                },
            },
        ],
    },
];
let IdentityRoutingModule = class IdentityRoutingModule {
};
IdentityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], IdentityRoutingModule);



/***/ }),

/***/ "../../packages/identity/src/lib/identity.module.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/identity.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/roles/roles.component */ "../../packages/identity/src/lib/components/roles/roles.component.ts");
/* harmony import */ var _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity-routing.module */ "../../packages/identity/src/lib/identity-routing.module.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users/users.component */ "../../packages/identity/src/lib/components/users/users.component.ts");
/* harmony import */ var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @abp/ng.permission-management */ "../../packages/permission-management/src/public-api.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");













let IdentityModule = class IdentityModule {
};
IdentityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]],
        imports: [
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([_states_identity_state__WEBPACK_IMPORTED_MODULE_6__["IdentityState"]]),
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdentityRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__["ThemeSharedModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
            _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementModule"],
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"],
        ],
    })
], IdentityModule);



/***/ }),

/***/ "../../packages/identity/src/lib/services/identity-state.service.ts":
/*!********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/identity-state.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: IdentityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityStateService", function() { return IdentityStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");





let IdentityStateService = class IdentityStateService {
    constructor(store) {
        this.store = store;
    }
    getRoles() {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getRoles);
    }
    getRolesTotalCount() {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getRolesTotalCount);
    }
    getUsers() {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getUsers);
    }
    getUsersTotalCount() {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getUsersTotalCount);
    }
    dispatchGetRoles(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"](...args));
    }
    dispatchGetRoleById(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"](...args));
    }
    dispatchDeleteRole(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"](...args));
    }
    dispatchCreateRole(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"](...args));
    }
    dispatchUpdateRole(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"](...args));
    }
    dispatchGetUsers(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"](...args));
    }
    dispatchGetUserById(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"](...args));
    }
    dispatchDeleteUser(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"](...args));
    }
    dispatchCreateUser(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"](...args));
    }
    dispatchUpdateUser(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"](...args));
    }
    dispatchGetUserRoles(...args) {
        return this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"](...args));
    }
};
IdentityStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
IdentityStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], IdentityStateService);



/***/ }),

/***/ "../../packages/identity/src/lib/services/identity.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/identity.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");



let IdentityService = class IdentityService {
    constructor(rest) {
        this.rest = rest;
    }
    getRoles(params = {}) {
        const request = {
            method: 'GET',
            url: '/api/identity/roles',
            params,
        };
        return this.rest.request(request);
    }
    getRoleById(id) {
        const request = {
            method: 'GET',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request);
    }
    deleteRole(id) {
        const request = {
            method: 'DELETE',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request);
    }
    createRole(body) {
        const request = {
            method: 'POST',
            url: '/api/identity/roles',
            body,
        };
        return this.rest.request(request);
    }
    updateRole(body) {
        const url = `/api/identity/roles/${body.id}`;
        delete body.id;
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request);
    }
    getUsers(params = {}) {
        const request = {
            method: 'GET',
            url: '/api/identity/users',
            params,
        };
        return this.rest.request(request);
    }
    getUserById(id) {
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request);
    }
    getUserRoles(id) {
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}/roles`,
        };
        return this.rest.request(request);
    }
    deleteUser(id) {
        const request = {
            method: 'DELETE',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request);
    }
    createUser(body) {
        const request = {
            method: 'POST',
            url: '/api/identity/users',
            body,
        };
        return this.rest.request(request);
    }
    updateUser(body) {
        const url = `/api/identity/users/${body.id}`;
        delete body.id;
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request);
    }
};
IdentityService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
IdentityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
], IdentityService);



/***/ }),

/***/ "../../packages/identity/src/lib/services/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: IdentityService, IdentityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.service */ "../../packages/identity/src/lib/services/identity.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"]; });

/* harmony import */ var _identity_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity-state.service */ "../../packages/identity/src/lib/services/identity-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityStateService", function() { return _identity_state_service__WEBPACK_IMPORTED_MODULE_2__["IdentityStateService"]; });






/***/ }),

/***/ "../../packages/identity/src/lib/states/identity.state.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/states/identity.state.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IdentityState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityState", function() { return IdentityState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/identity.service */ "../../packages/identity/src/lib/services/identity.service.ts");





let IdentityState = class IdentityState {
    constructor(identityService) {
        this.identityService = identityService;
    }
    static getRoles({ roles }) {
        return roles.items || [];
    }
    static getRolesTotalCount({ roles }) {
        return roles.totalCount || 0;
    }
    static getUsers({ users }) {
        return users.items || [];
    }
    static getUsersTotalCount({ users }) {
        return users.totalCount || 0;
    }
    getRoles({ patchState }, { payload }) {
        return this.identityService.getRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(roles => patchState({
            roles,
        })));
    }
    getRole({ patchState }, { payload }) {
        return this.identityService.getRoleById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(selectedRole => patchState({
            selectedRole,
        })));
    }
    deleteRole(_, { payload }) {
        return this.identityService.deleteRole(payload);
    }
    addRole(_, { payload }) {
        return this.identityService.createRole(payload);
    }
    updateRole({ getState }, { payload }) {
        return this.identityService.updateRole(Object.assign({}, getState().selectedRole, payload));
    }
    getUsers({ patchState }, { payload }) {
        return this.identityService.getUsers(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(users => patchState({
            users,
        })));
    }
    getUser({ patchState }, { payload }) {
        return this.identityService.getUserById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(selectedUser => patchState({
            selectedUser,
        })));
    }
    deleteUser(_, { payload }) {
        return this.identityService.deleteUser(payload);
    }
    addUser(_, { payload }) {
        return this.identityService.createUser(payload);
    }
    updateUser({ getState }, { payload }) {
        return this.identityService.updateUser(Object.assign({}, getState().selectedUser, payload));
    }
    getUserRoles({ patchState }, { payload }) {
        return this.identityService.getUserRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(selectedUserRoles => patchState({
            selectedUserRoles,
        })));
    }
};
IdentityState.ctorParameters = () => [
    { type: _services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "getRoles", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "getRole", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "deleteRole", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "addRole", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "updateRole", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "getUsers", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "getUser", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "deleteUser", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "addUser", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "updateUser", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IdentityState.prototype, "getUserRoles", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
], IdentityState, "getRoles", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)
], IdentityState, "getRolesTotalCount", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
], IdentityState, "getUsers", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)
], IdentityState, "getUsersTotalCount", null);
IdentityState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'IdentityState',
        defaults: { roles: {}, selectedRole: {}, users: {}, selectedUser: {} },
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]])
], IdentityState);



/***/ }),

/***/ "../../packages/identity/src/public-api.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/public-api.ts ***!
  \*******************************************************************************************/
/*! exports provided: IdentityModule, GetRoles, GetRoleById, DeleteRole, CreateRole, UpdateRole, GetUsers, GetUserById, DeleteUser, CreateUser, UpdateUser, GetUserRoles, UsersComponent, IdentityService, IdentityState, RolesComponent, IdentityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/identity.module */ "../../packages/identity/src/lib/identity.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__["IdentityModule"]; });

/* harmony import */ var _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRoles", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetRoles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRoleById", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetRoleById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteRole", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateRole", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["CreateRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateRole", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserById", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["CreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserRoles", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserRoles"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/identity/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ "../../packages/identity/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["IdentityStateService"]; });

/* harmony import */ var _lib_states_identity_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityState", function() { return _lib_states_identity_state__WEBPACK_IMPORTED_MODULE_5__["IdentityState"]; });

/*
 * Public API Surface of identity
 */








/***/ }),

/***/ "../../packages/permission-management/src/lib/actions/index.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/actions/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: GetPermissions, UpdatePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.actions */ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetPermissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdatePermissions"]; });





/***/ }),

/***/ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/actions/permission-management.actions.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: GetPermissions, UpdatePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return GetPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return UpdatePermissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class GetPermissions {
    constructor(payload) {
        this.payload = payload;
    }
}
GetPermissions.type = '[PermissionManagement] Get Permissions';
class UpdatePermissions {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdatePermissions.type = '[PermissionManagement] Update Permissions';


/***/ }),

/***/ "../../packages/permission-management/src/lib/components/index.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/index.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.component */ "../../packages/permission-management/src/lib/components/permission-management.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return _permission_management_component__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementComponent"]; });





/***/ }),

/***/ "../../packages/permission-management/src/lib/components/permission-management.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/permission-management.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return PermissionManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/permission-management.actions */ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
/* harmony import */ var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");







let PermissionManagementComponent = class PermissionManagementComponent {
    constructor(store, renderer) {
        this.store = store;
        this.renderer = renderer;
        this.hideBadges = false;
        this._visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.permissions = [];
        this.selectThisTab = false;
        this.selectAllTab = false;
        this.modalBusy = false;
        this.trackByFn = (_, item) => item.name;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (value === this._visible)
            return;
        if (value) {
            this.openModal().subscribe(() => {
                this._visible = true;
                this.visibleChange.emit(true);
            });
        }
        else {
            this.selectedGroup = null;
            this._visible = false;
            this.visibleChange.emit(false);
        }
    }
    get selectedGroupPermissions$() {
        return this.groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groups => this.selectedGroup
            ? groups.find(group => group.name === this.selectedGroup.name).permissions
            : []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(permissions => permissions.map(permission => (Object.assign({}, permission, { margin: findMargin(permissions, permission), isGranted: this.permissions.find(per => per.name === permission.name).isGranted })))));
    }
    getChecked(name) {
        return (this.permissions.find(per => per.name === name) || { isGranted: false }).isGranted;
    }
    isGrantedByOtherProviderName(grantedProviders) {
        if (grantedProviders.length) {
            return grantedProviders.findIndex(p => p.providerName !== this.providerName) > -1;
        }
        return false;
    }
    onClickCheckbox(clickedPermission, value) {
        if (clickedPermission.isGranted &&
            this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout(() => {
            this.permissions = this.permissions.map(per => {
                if (clickedPermission.name === per.name) {
                    return Object.assign({}, per, { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return Object.assign({}, per, { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return Object.assign({}, per, { isGranted: true });
                }
                return per;
            });
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
        }, 0);
    }
    setTabCheckboxState() {
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(permissions => {
            const selectedPermissions = permissions.filter(per => per.isGranted);
            const element = document.querySelector('#select-all-in-this-tabs');
            if (selectedPermissions.length === permissions.length) {
                element.indeterminate = false;
                this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                element.indeterminate = false;
                this.selectThisTab = false;
            }
            else {
                element.indeterminate = true;
            }
        });
    }
    setGrantCheckboxState() {
        const selectedAllPermissions = this.permissions.filter(per => per.isGranted);
        const checkboxElement = document.querySelector('#select-all-in-all-tabs');
        if (selectedAllPermissions.length === this.permissions.length) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = false;
        }
        else {
            checkboxElement.indeterminate = true;
        }
    }
    onClickSelectThisTab() {
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(permissions => {
            permissions.forEach(permission => {
                if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                const index = this.permissions.findIndex(per => per.name === permission.name);
                this.permissions = [
                    ...this.permissions.slice(0, index),
                    Object.assign({}, this.permissions[index], { isGranted: !this.selectThisTab }),
                    ...this.permissions.slice(index + 1),
                ];
            });
        });
        this.setGrantCheckboxState();
    }
    onClickSelectAll() {
        this.permissions = this.permissions.map(permission => (Object.assign({}, permission, { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || !this.selectAllTab })));
        this.selectThisTab = !this.selectAllTab;
    }
    onChangeGroup(group) {
        this.selectedGroup = group;
        this.setTabCheckboxState();
    }
    submit() {
        this.modalBusy = true;
        const unchangedPermissions = getPermissions(this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getPermissionGroups));
        const changedPermissions = this.permissions
            .filter(per => unchangedPermissions.find(unchanged => unchanged.name === per.name).isGranted ===
            per.isGranted
            ? false
            : true)
            .map(({ name, isGranted }) => ({ name, isGranted }));
        if (changedPermissions.length) {
            this.store
                .dispatch(new _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePermissions"]({
                providerKey: this.providerKey,
                providerName: this.providerName,
                permissions: changedPermissions,
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => (this.modalBusy = false)))
                .subscribe(() => {
                this.visible = false;
            });
        }
        else {
            this.modalBusy = false;
            this.visible = false;
        }
    }
    openModal() {
        if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
        }
        return this.store
            .dispatch(new _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__["GetPermissions"]({
            providerKey: this.providerKey,
            providerName: this.providerName,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('PermissionManagementState', 'permissionRes'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((permissionRes) => {
            this.selectedGroup = permissionRes.groups[0];
            this.permissions = getPermissions(permissionRes.groups);
        }));
    }
    initModal() {
        this.setTabCheckboxState();
        this.setGrantCheckboxState();
    }
};
PermissionManagementComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PermissionManagementComponent.prototype, "providerName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PermissionManagementComponent.prototype, "providerKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PermissionManagementComponent.prototype, "hideBadges", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], PermissionManagementComponent.prototype, "visible", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PermissionManagementComponent.prototype, "visibleChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getPermissionGroups),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
], PermissionManagementComponent.prototype, "groups$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getEntityDisplayName),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
], PermissionManagementComponent.prototype, "entityName$", void 0);
PermissionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-permission-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./permission-management.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/permission-management/src/lib/components/permission-management.component.html")).default,
        exportAs: 'abpPermissionManagement',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], PermissionManagementComponent);

function findMargin(permissions, permission) {
    const parentPermission = permissions.find(per => per.name === permission.parentName);
    if (parentPermission && parentPermission.parentName) {
        let margin = 20;
        return (margin += findMargin(permissions, parentPermission));
    }
    return parentPermission ? 20 : 0;
}
function getPermissions(groups) {
    return groups.reduce((acc, val) => [...acc, ...val.permissions], []);
}


/***/ }),

/***/ "../../packages/permission-management/src/lib/permission-management.module.ts":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/permission-management.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PermissionManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return PermissionManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/permission-management.component */ "../../packages/permission-management/src/lib/components/permission-management.component.ts");
/* harmony import */ var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");







let PermissionManagementModule = class PermissionManagementModule {
};
PermissionManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]],
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"]])],
        exports: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]],
    })
], PermissionManagementModule);



/***/ }),

/***/ "../../packages/permission-management/src/lib/services/index.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PermissionManagementService, PermissionManagementStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.service */ "../../packages/permission-management/src/lib/services/permission-management.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return _permission_management_service__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementService"]; });

/* harmony import */ var _permission_management_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission-management-state.service */ "../../packages/permission-management/src/lib/services/permission-management-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return _permission_management_state_service__WEBPACK_IMPORTED_MODULE_2__["PermissionManagementStateService"]; });






/***/ }),

/***/ "../../packages/permission-management/src/lib/services/permission-management-state.service.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/permission-management-state.service.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PermissionManagementStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return PermissionManagementStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "../../packages/permission-management/src/lib/actions/index.ts");





let PermissionManagementStateService = class PermissionManagementStateService {
    constructor(store) {
        this.store = store;
    }
    getPermissionGroups() {
        return this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementState"].getPermissionGroups);
    }
    getEntityDisplayName() {
        return this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementState"].getEntityDisplayName);
    }
    dispatchGetPermissions(...args) {
        return this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["GetPermissions"](...args));
    }
    dispatchUpdatePermissions(...args) {
        return this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePermissions"](...args));
    }
};
PermissionManagementStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PermissionManagementStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], PermissionManagementStateService);



/***/ }),

/***/ "../../packages/permission-management/src/lib/services/permission-management.service.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/permission-management.service.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: PermissionManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return PermissionManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");



let PermissionManagementService = class PermissionManagementService {
    constructor(rest) {
        this.rest = rest;
    }
    getPermissions(params) {
        const request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params,
        };
        return this.rest.request(request);
    }
    updatePermissions({ permissions, providerKey, providerName, }) {
        const request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: { permissions },
            params: { providerKey, providerName },
        };
        return this.rest.request(request);
    }
};
PermissionManagementService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
PermissionManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
], PermissionManagementService);



/***/ }),

/***/ "../../packages/permission-management/src/lib/states/index.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/states/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PermissionManagementState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return _permission_management_state__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementState"]; });





/***/ }),

/***/ "../../packages/permission-management/src/lib/states/permission-management.state.ts":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/states/permission-management.state.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PermissionManagementState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return PermissionManagementState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/permission-management.actions */ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
/* harmony import */ var _services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/permission-management.service */ "../../packages/permission-management/src/lib/services/permission-management.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let PermissionManagementState = class PermissionManagementState {
    constructor(permissionManagementService) {
        this.permissionManagementService = permissionManagementService;
    }
    static getPermissionGroups({ permissionRes }) {
        return permissionRes.groups || [];
    }
    static getEntityDisplayName({ permissionRes }) {
        return permissionRes.entityDisplayName;
    }
    permissionManagementGet({ patchState }, { payload }) {
        return this.permissionManagementService.getPermissions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(permissionResponse => patchState({
            permissionRes: permissionResponse,
        })));
    }
    permissionManagementUpdate(_, { payload }) {
        return this.permissionManagementService.updatePermissions(payload);
    }
};
PermissionManagementState.ctorParameters = () => [
    { type: _services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementGet", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementUpdate", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PermissionManagementState, "getPermissionGroups", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", String)
], PermissionManagementState, "getEntityDisplayName", null);
PermissionManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'PermissionManagementState',
        defaults: { permissionRes: {} },
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementService"]])
], PermissionManagementState);



/***/ }),

/***/ "../../packages/permission-management/src/public-api.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/public-api.ts ***!
  \********************************************************************************************************/
/*! exports provided: PermissionManagementModule, PermissionManagementState, GetPermissions, UpdatePermissions, PermissionManagementComponent, PermissionManagementService, PermissionManagementStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/permission-management.module */ "../../packages/permission-management/src/lib/permission-management.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementModule"]; });

/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions */ "../../packages/permission-management/src/lib/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/permission-management/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementComponent"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ "../../packages/permission-management/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementStateService"]; });

/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/states */ "../../packages/permission-management/src/lib/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementState"]; });

/*
 * Public API Surface of permission-management
 */








/***/ }),

/***/ "./src/app/lazy-libs/identity-wrapper.module.ts":
/*!******************************************************!*\
  !*** ./src/app/lazy-libs/identity-wrapper.module.ts ***!
  \******************************************************/
/*! exports provided: IdentityWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityWrapperModule", function() { return IdentityWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.identity */ "../../packages/identity/src/public-api.ts");



let IdentityWrapperModule = class IdentityWrapperModule {
};
IdentityWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__["IdentityModule"]],
    })
], IdentityWrapperModule);



/***/ })

}]);