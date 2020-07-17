import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PermissionManagementState } from '../states/permission-management.state';
import { GetPermissions, UpdatePermissions } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
let PermissionManagementStateService = class PermissionManagementStateService {
    constructor(store) {
        this.store = store;
    }
    getPermissionGroups() {
        return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
    }
    getEntityDisplayName() {
        return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
    }
    dispatchGetPermissions(...args) {
        return this.store.dispatch(new GetPermissions(...args));
    }
    dispatchUpdatePermissions(...args) {
        return this.store.dispatch(new UpdatePermissions(...args));
    }
};
PermissionManagementStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionManagementStateService_Factory() { return new PermissionManagementStateService(i0.ɵɵinject(i1.Store)); }, token: PermissionManagementStateService, providedIn: "root" });
PermissionManagementStateService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Store])
], PermissionManagementStateService);
export { PermissionManagementStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvc3JjL2xpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUsvRCxJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztJQUMzQyxZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFFcEMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsc0JBQXNCLENBQUMsR0FBRyxJQUFrRDtRQUMxRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQseUJBQXlCLENBQUMsR0FBRyxJQUFxRDtRQUNoRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFBOztBQWpCWSxnQ0FBZ0M7SUFINUMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FFMkIsS0FBSztHQURyQixnQ0FBZ0MsQ0FpQjVDO1NBakJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LnN0YXRlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRQZXJtaXNzaW9ucywgVXBkYXRlUGVybWlzc2lvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uTWFuYWdlbWVudFN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldFBlcm1pc3Npb25Hcm91cHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChQZXJtaXNzaW9uTWFuYWdlbWVudFN0YXRlLmdldFBlcm1pc3Npb25Hcm91cHMpO1xyXG4gIH1cclxuICBnZXRFbnRpdHlEaXNwbGF5TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUuZ2V0RW50aXR5RGlzcGxheU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRQZXJtaXNzaW9ucyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEdldFBlcm1pc3Npb25zPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBlcm1pc3Npb25zKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoVXBkYXRlUGVybWlzc2lvbnMoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBVcGRhdGVQZXJtaXNzaW9ucz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVQZXJtaXNzaW9ucyguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==