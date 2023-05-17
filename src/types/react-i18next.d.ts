// react-i18next versions higher than 11.11.0
declare module 'types/react-i18next' {
  // src/i18n-resources.d.ts

  import { i18n, Namespace, TFunction, ThirdPartyModule } from 'i18next';
  export const initReactI18next: ThirdPartyModule;

  export interface UseTranslationOptions {
    i18n?: i18n;
    useSuspense?: boolean;
  }

  type UseTranslationResponse<N extends Namespace> = [
    TFunction<N>,
    i18n,
    boolean
  ] & {
    t: TFunction<N>;
    i18n: i18n;
    ready: boolean;
  };

  export function useTranslation<N extends Namespace>(
    ns?: N,
    options?: UseTranslationOptions
  ): UseTranslationResponse<N>;
}
