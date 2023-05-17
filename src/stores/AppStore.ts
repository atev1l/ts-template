import i18next from 'i18next';
import { makeAutoObservable } from 'mobx';

import { LocaleKeys, LocalStorageKeys } from '../constants';
import { RootStore } from './RootStore';

export class AppStore {
  root: RootStore;

  private appLocale: LocaleKeys;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.appLocale =
      (localStorage.getItem(LocalStorageKeys.LOCALE) as LocaleKeys) ??
      (i18next.language as LocaleKeys) ??
      LocaleKeys.EN;
  }

  get getAppLocale(): LocaleKeys {
    return this.appLocale;
  }

  setAppLocale(newValue: LocaleKeys) {
    localStorage.setItem(LocalStorageKeys.LOCALE, newValue);
    this.appLocale = newValue;
  }
}
