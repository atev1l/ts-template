import {
  AuthenticationResultDto,
  AuthenticationStrategyByCredentialsModel,
  AuthenticationStrategyBySignInTokenModel,
  CompanyDto,
  CompanyShortDto,
  PasswordResetAttemptCommand,
  PasswordResetRequestCommand,
  RefreshTokenDto,
  SignUpWithCompanyInviteCommand,
} from 'api';
import { AxiosError, AxiosInstance } from 'axios';

import { ApiControllerBase } from '../bases';

export class AuthController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v = 'v1') {
    super(cl, v, 'authentication');
  }

  public async logIn(
    model: AuthenticationStrategyByCredentialsModel,
    onSuccess: ((x: any) => any) | null = null,
    onError: ((y: AxiosError) => any) | null = null
  ): Promise<AuthenticationResultDto | AxiosError> {
    return await this.process(
      this.post('credentials', { data: model }),
      onSuccess,
      onError
    );
  }

  public async logInWithToken(
    model: AuthenticationStrategyBySignInTokenModel
  ): Promise<AuthenticationResultDto | AxiosError> {
    return await this.process(this.post('sign-in-token', { data: model }));
  }

  public async refreshToken(
    model: RefreshTokenDto
  ): Promise<AuthenticationResultDto | false | AxiosError> {
    return await this.process(
      this.post('refresh-token', { data: model }),
      x => x,
      () => false
    );
  }

  public async signUpWithCompanyInviteValidateCode(
    model: string,
    onSuccess: ((x: any) => any) | null = null,
    onError: ((y: AxiosError) => any) | null = null
  ): Promise<CompanyShortDto | AxiosError> {
    return await this.process(
      this.get('sign-up/company-invite/' + model),
      onSuccess,
      onError
    );
  }

  public async signUpWithCompanyInvite(
    model: SignUpWithCompanyInviteCommand,
    onSuccess: ((x: any) => any) | null = null,
    onError: ((y: AxiosError) => any) | null = null
  ): Promise<boolean | AxiosError> {
    return await this.process(
      this.post('sign-up/company-invite', { data: model }),
      onSuccess,
      onError
    );
  }

  public async resetPasswordSendCode(
    model: PasswordResetRequestCommand
  ): Promise<boolean | AxiosError> {
    return await this.process(
      this.post('password-reset', { data: model }),
      () => true,
      () => false
    );
  }

  public async resetPassword(
    model: PasswordResetAttemptCommand
  ): Promise<CompanyDto | AxiosError> {
    return await this.process(this.put('password-reset', { data: model }));
  }
}
