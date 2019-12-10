import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken
} from '@nebular/auth';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'access_token'
          },
          baseEndpoint: 'http://localhost:3333/api',
          login: {
            endpoint: '/auth/sign-in'
          },
          register: {
            endpoint: '/auth/sign-up'
          },
          logout: {
            endpoint: '/auth/sign-out'
          },
          requestPass: {
            endpoint: '/auth/request-pass'
          },
          resetPass: {
            endpoint: '/auth/reset-pass'
          }
        })
      ],
      forms: {}
    }),
    AuthRoutingModule
  ],
  declarations: [],
})
export class AuthModule {}
