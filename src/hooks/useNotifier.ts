import { useTranslation } from 'types/react-i18next';

import { NotifierThemeKeys } from '../constants';
import { IShowMethod } from '../stores/NotifierStore';
import { useRootStore } from './useRootStore';

interface IShowSuccessError extends Omit<IShowMethod, 'message'> {
  successMessage: string;
  errorMessage: string;
  value: boolean;
}

interface IUseNotifier {
  show: (params: IShowMethod) => void;
  showDefaultError: () => void;
  showSuccessError: (params: IShowSuccessError) => void;
}

export const useNotifier = (): IUseNotifier => {
  const { t } = useTranslation();
  const { notifierStore } = useRootStore();

  const show = (params: IShowMethod) => notifierStore.show(params);

  const showDefaultError = () => {
    notifierStore.show({
      message: t('notifier:error.default'),
      theme: NotifierThemeKeys.error,
    });
  };

  const showSuccessError = (params: IShowSuccessError) =>
    notifierStore.show({
      ...params,
      message: params.value ? params.successMessage : params.errorMessage,
    });

  return {
    show,
    showDefaultError,
    showSuccessError,
  };
};
