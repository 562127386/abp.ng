export class SettingDto {
  name: string;
  displayName: string;
  description: string;
  defaultValue: string;
  isVisibleToClients: boolean;
  isInherited: boolean;
  isEncrypted: boolean;
  value: string;
  properties: any;
  providers: Array<string>;

  constructor(initialValues: Partial<SettingDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
