/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */



export type CompanyDto = {
    id?: number;
    name?: string | null;
    nameFallback?: string | null;
    description?: string | null;
    userLimit?: number | null;
    imageId?: number | null;
    dateCreated?: string;
    dateUpdated?: string | null;
    uiType?: number;
    contactName?: string | null;
    contactPhoneNumber?: string | null;
    timeZoneFromUtc?: number;
    color?: string | null;
    scheduleIsSameOnWeekdays?: boolean;
}
