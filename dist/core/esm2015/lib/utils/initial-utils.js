import { registerLocaleData } from '@angular/common';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { tap } from 'rxjs/operators';
import { GetAppConfiguration } from '../actions/config.actions';
import differentLocales from '../constants/different-locales';
import { ConfigState } from '../states/config.state';
import { CORE_OPTIONS } from '../tokens/options.token';
export function getInitialData(injector) {
    const fn = () => {
        const store = injector.get(Store);
        const { skipGetAppConfiguration } = injector.get(CORE_OPTIONS);
        if (skipGetAppConfiguration)
            return;
        return store
            .dispatch(new GetAppConfiguration())
            .pipe(tap(res => checkAccessToken(store, injector)))
            .toPromise();
    };
    return fn;
}
function checkAccessToken(store, injector) {
    const oAuth = injector.get(OAuthService);
    if (oAuth.hasValidAccessToken() && !store.selectSnapshot(ConfigState.getDeep('currentUser.id'))) {
        oAuth.logOut();
    }
}
export function localeInitializer(injector) {
    const fn = () => {
        const store = injector.get(Store);
        const lang = store.selectSnapshot(state => state.SessionState.language) || 'en';
        return new Promise((resolve, reject) => {
            registerLocale(lang).then(() => resolve('resolved'), reject);
        });
    };
    return fn;
}
export function registerLocale(locale) {
    return import(
    /* webpackInclude: /(af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$/ */
    `@angular/common/locales/${differentLocales[locale] || locale}.js`).then(module => {
        registerLocaleData(module.default);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi91dGlscy9pbml0aWFsLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLGdCQUFnQixNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFrQjtJQUMvQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUU7UUFDZCxNQUFNLEtBQUssR0FBVSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFhLENBQUM7UUFFM0UsSUFBSSx1QkFBdUI7WUFBRSxPQUFPO1FBRXBDLE9BQU8sS0FBSzthQUNULFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ25ELFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUVGLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBWSxFQUFFLFFBQWtCO0lBQ3hELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUU7UUFDL0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxRQUFrQjtJQUNsRCxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUU7UUFDZCxNQUFNLEtBQUssR0FBVSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVoRixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFjO0lBQzNDLE9BQU8sTUFBTTtJQUNYLDRjQUE0YztJQUM1YywyQkFBMkIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxLQUFLLENBQ25FLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2Qsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCBkaWZmZXJlbnRMb2NhbGVzIGZyb20gJy4uL2NvbnN0YW50cy9kaWZmZXJlbnQtbG9jYWxlcyc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBDT1JFX09QVElPTlMgfSBmcm9tICcuLi90b2tlbnMvb3B0aW9ucy50b2tlbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbERhdGEoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBpbmplY3Rvci5nZXQoU3RvcmUpO1xyXG4gICAgY29uc3QgeyBza2lwR2V0QXBwQ29uZmlndXJhdGlvbiB9ID0gaW5qZWN0b3IuZ2V0KENPUkVfT1BUSU9OUykgYXMgQUJQLlJvb3Q7XHJcblxyXG4gICAgaWYgKHNraXBHZXRBcHBDb25maWd1cmF0aW9uKSByZXR1cm47XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKVxyXG4gICAgICAucGlwZSh0YXAocmVzID0+IGNoZWNrQWNjZXNzVG9rZW4oc3RvcmUsIGluamVjdG9yKSkpXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQWNjZXNzVG9rZW4oc3RvcmU6IFN0b3JlLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zdCBvQXV0aCA9IGluamVjdG9yLmdldChPQXV0aFNlcnZpY2UpO1xyXG4gIGlmIChvQXV0aC5oYXNWYWxpZEFjY2Vzc1Rva2VuKCkgJiYgIXN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldERlZXAoJ2N1cnJlbnRVc2VyLmlkJykpKSB7XHJcbiAgICBvQXV0aC5sb2dPdXQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVJbml0aWFsaXplcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IGluamVjdG9yLmdldChTdG9yZSk7XHJcblxyXG4gICAgY29uc3QgbGFuZyA9IHN0b3JlLnNlbGVjdFNuYXBzaG90KHN0YXRlID0+IHN0YXRlLlNlc3Npb25TdGF0ZS5sYW5ndWFnZSkgfHwgJ2VuJztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZWdpc3RlckxvY2FsZShsYW5nKS50aGVuKCgpID0+IHJlc29sdmUoJ3Jlc29sdmVkJyksIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZm47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckxvY2FsZShsb2NhbGU6IHN0cmluZykge1xyXG4gIHJldHVybiBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrSW5jbHVkZTogLyhhZnxhbXxhci1TQXxhc3xhei1MYXRufGJlfGJnfGJuLUJEfGJuLUlOfGJzfGNhfGNhLUVTLVZBTEVOQ0lBfGNzfGN5fGRhfGRlfGRlfGVsfGVuLUdCfGVufGVzfGVufGVzLVVTfGVzLU1YfGV0fGV1fGZhfGZpfGVufGZyfGZyfGZyLUNBfGdhfGdkfGdsfGd1fGhhfGhlfGhpfGhyfGh1fGh5fGlkfGlnfGlzfGl0fGl0fGphfGthfGtrfGttfGtufGtvfGtva3xlbnxlbnxsYnxsdHxsdnxlbnxta3xtbHxtbnxtcnxtc3xtdHxuYnxuZXxubHxubC1CRXxubnxlbnxvcnxwYXxwYS1BcmFifHBsfGVufHB0fHB0LVBUfGVufGVufHJvfHJ1fHJ3fHBhLUFyYWJ8c2l8c2t8c2x8c3F8c3ItQ3lybC1CQXxzci1DeXJsfHNyLUxhdG58c3Z8c3d8dGF8dGV8dGd8dGh8dGl8dGt8dG58dHJ8dHR8dWd8dWt8dXJ8dXotTGF0bnx2aXx3b3x4aHx5b3x6aC1IYW5zfHpoLUhhbnR8enUpXFwuanMkLyAqL1xyXG4gICAgYEBhbmd1bGFyL2NvbW1vbi9sb2NhbGVzLyR7ZGlmZmVyZW50TG9jYWxlc1tsb2NhbGVdIHx8IGxvY2FsZX0uanNgXHJcbiAgKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICByZWdpc3RlckxvY2FsZURhdGEobW9kdWxlLmRlZmF1bHQpO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==