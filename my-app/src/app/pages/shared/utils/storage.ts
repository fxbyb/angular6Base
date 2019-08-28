import Core from './core';

export enum StorageType {
  Local = 'local',
  Session = 'session'
}

export class StorageManager {

  // tslint:disable-next-line:variable-name
  private static _defaultStorageType: StorageType = StorageType.Local;
  private static _currentStorage(type: StorageType) {
    return type === StorageType.Local ? localStorage : sessionStorage;
  }
  private static get _store() {
    return this._currentStorage(this._defaultStorageType);
  }

  private constructor() {}

  static configType(type: StorageType) {
     this._defaultStorageType = type;
     return this;
  }

  static get(key: string) {
    try {
     if(key=== 'cmb-audit-app-project-name'){
       return this._store[key];
     }else{
       return JSON.parse(this._store[key]);
     }
    } catch (e) {
      return this._store.getItem(key);
    }
  }

  static set(key: string, value: any) {
    if (Core.isObject(value) || Core.isArray(value)) {
      this._store[key] = JSON.stringify(value);
    } else {
      this._store.setItem(key, value);
    }
  }

  static remove(key: string) {
    this._store.removeItem(key);
  }

  static clear() {
    this._store.clear();
  }

}
