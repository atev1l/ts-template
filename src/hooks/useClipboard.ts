import { useState } from 'react';
import { useTranslation } from 'types/react-i18next';

import { NotifierThemeKeys } from '../constants';
import { useNotifier } from './useNotifier';

type TCopiedValue = string | null;
type TCopyFn = (text: string) => Promise<boolean>; // Return success
type TCopySuccessFn = () => void;
type TCopyErrFn = () => void;

interface IUseCopyToClipboardProps {
  onError?: TCopyErrFn;
  onSuccess?: TCopySuccessFn;
  params?: IUseCopyToClipboardPropsParams;
}

interface IUseCopyToClipboardPropsParams {
  preventDefaultErrorsNotifier?: boolean;
  preventDefaultSuccessNotifier?: boolean;
}

export const useClipboard = (
  props?: IUseCopyToClipboardProps
): [TCopyFn, TCopiedValue] => {
  const { t } = useTranslation();
  const notifier = useNotifier();
  const [copiedText, setCopiedText] = useState<TCopiedValue>(null);

  const copy: TCopyFn = async (text: string) => {
    if (!navigator?.clipboard) {
      !props?.params?.preventDefaultErrorsNotifier &&
        notifier.show({
          message: t('notifier:error.default'),
          theme: NotifierThemeKeys.error,
        });
      props?.onError && props.onError();
      return false;
    }

    if (
      (
        await navigator.permissions.query({
          name: 'clipboard-read' as PermissionName,
        })
      )?.state == 'denied'
    ) {
      !props?.params?.preventDefaultErrorsNotifier &&
        notifier.show({
          message: t('notifier:success.copied_clipboard'),
          theme: NotifierThemeKeys.error,
        });
      props?.onError && props.onError();
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      !props?.params?.preventDefaultSuccessNotifier &&
        notifier.show({
          message: t('notifier:success.copied_clipboard'),
          theme: NotifierThemeKeys.success,
        });
      setCopiedText(text);
      props?.onSuccess && props.onSuccess();
      return true;
    } catch (error) {
      !props?.params?.preventDefaultErrorsNotifier &&
        notifier.show({
          message: t('notifier:error.default'),
          theme: NotifierThemeKeys.error,
        });
      props?.onError && props.onError();
      setCopiedText(null);
      return false;
    }
  };

  return [copy, copiedText];
};
