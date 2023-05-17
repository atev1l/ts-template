import { makeAutoObservable } from 'mobx';

import { RootStore } from './RootStore';

export class AuthStore {
  root: RootStore;
  private isAuth: boolean;
  // data of auth

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  get getIsAuth() {
    return this.isAuth;
  }

  setIsAuth(value: boolean) {
    this.isAuth = value;
  }
}
