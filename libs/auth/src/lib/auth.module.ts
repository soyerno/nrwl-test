import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
  NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  nbNoOpInterceptorFilter
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
  providers: [
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function() {
        return false;
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbAuthJWTInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}
