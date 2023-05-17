import { makeAutoObservable } from 'mobx';

import { AuthStore } from './AuthStore';
import { NotifierStore } from './NotifierStore';

export class RootStore {

  public authStore: AuthStore;
  public notifierStore: NotifierStore;

  constructor() {
    makeAutoObservable(this);
    this.authStore = new AuthStore(this);
    this.notifierStore = new NotifierStore(this);
  }
}

export const rootStore = new RootStore();