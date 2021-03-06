import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent } from '@abp/ng.feature-management';
export declare class FeatureManagementComponent extends AbpFeatureManagementComponent {
    private _store;
    providerKey: string;
    providerName: string;
    protected _visible: any;
    visible: boolean;
    constructor(_store: Store);
}
