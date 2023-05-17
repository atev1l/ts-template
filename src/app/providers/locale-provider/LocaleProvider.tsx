import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ReactNode, useEffect } from 'react';
import { initReactI18next } from 'react-i18next';

import { LocaleKeys, LocalStorageKeys } from '../../../constants';
import { EnResources, RuResources } from '../../../locales';

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = (props: LocaleProviderProps) => {
  const resources = {
    ru: RuResources,
    en: EnResources,
  };

  useEffect(() => {
    if (!localStorage.getItem(LocalStorageKeys.LOCALE))
      localStorage.setItem(LocalStorageKeys.LOCALE, LocaleKeys.EN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem(LocalStorageKeys.LOCALE)]);

  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      lng: localStorage.getItem(LocalStorageKeys.LOCALE) ?? LocaleKeys.EN,
      supportedLngs: [LocaleKeys.RU, LocaleKeys.EN],
      interpolation: {
        escapeValue: false,
      },
      cleanCode: true,
      lowerCaseLng: true,
      nonExplicitSupportedLngs: true,
      resources,
    });

  return <>{props.children}</>;
};
