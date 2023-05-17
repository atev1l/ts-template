export enum NotifierThemeKeys {
    info = 'info',
    success = 'success',
    error = 'error',
    warning = 'warning',
}

export type NotifierThemeType = NotifierThemeKeys.success
    | NotifierThemeKeys.error
    | NotifierThemeKeys.info
    | NotifierThemeKeys.warning