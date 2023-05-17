import { makeAutoObservable } from 'mobx';

import { NotifierThemeKeys } from '../constants';
import { RootStore } from './RootStore';

export type NotifierThemeType =
    | NotifierThemeKeys.info
    | NotifierThemeKeys.error
    | NotifierThemeKeys.warning
    | NotifierThemeKeys.success;

export interface IShowMethod {
    message: string;
    theme?: NotifierThemeType;
    timeout?: number;
}

export class NotifierStore {
  root: RootStore;
  private isOpen: boolean;
  private message: string | null;
  private theme: NotifierThemeType | null;
  private timeout?: number;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.isOpen = false;
    this.message = null;
    this.theme = NotifierThemeKeys.info;
    this.timeout = 300;
  }

  get getIsOpen(): boolean {
    return this.isOpen;
  }

  get getMessage(): string | null {
    return this.message;
  }

  get getTheme(): NotifierThemeType | null {
    return this.theme;
  }

  get getTimeout(): number | undefined {
    return this.timeout;
  }

  setIsOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  setMessage(content: string | null): void {
    this.message = content;
  }

  setTheme(theme: NotifierThemeType): void {
    this.theme = theme;
  }

  setTimeout(timeout: number | undefined): void {
    this.timeout = timeout;
  }

  show({ message, timeout, theme }: IShowMethod): void {
    this.setIsOpen(true);
    this.setMessage(message);
    if (timeout) this.setTimeout(timeout);
    if (theme) this.setTheme(theme);
    setTimeout(this.resetOptions.bind(this), this.timeout);
  }

  resetOptions(): void {
    this.isOpen = false;
    this.message = null;
    this.theme = null;
    this.timeout = 3000;
  }
}