/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */


export type UserDto = {
    id?: number;
    firstName?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    name?: string | null;
    nameShort?: string | null;
    nameFallback?: string | null;
    phoneNumber?: string | null;
    timeZoneFromUtc?: number;
    email?: string | null;
    color?: string | null;
    isEmailConfirmed?: boolean;
    password?: string | null;
    currentAccessType?: number | null;
    emailNotificationType?: number | null;
    updateNoteLastSeenVersion?: number;
    currentPlatformContext?: string | null;
    currentCultureKey?: string | null;
    currentCompanyId?: number | null;
    dateLastOnline?: string | null;
    dateControlSessionLastInteraction?: string | null;
}
