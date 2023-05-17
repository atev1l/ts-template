/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

export type InitialInfoDto = {
    identity?: UserDto;
    permissions?: Array<string> | null;
}
