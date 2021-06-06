import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';
import { LbdModule } from 'app/lbd/lbd.module';
import { LoginComponent } from 'app/login/login.component';
import { PreloginRoutes } from './prelogin-layout.routing';
import { SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, AmazonLoginProvider } from 'angularx-social-login';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/services/tokeninterceptor.service';
import { ApiService } from 'app/services/api/api.service';

@NgModule({
  imports: [
    RouterModule.forChild(PreloginRoutes),
    NgxSpinnerModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('113112417924-lj36gh0vhfsetajah629uqp4cs3ur32f.apps.googleusercontent.com'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('4188548264521910'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, ApiService
  ],
})

export class PreloginLayoutModule { }