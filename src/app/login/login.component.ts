import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SocialPlatform, UserSignInModel, UserSignUpModel } from 'app/models/User';
import { StorageService } from 'app/services/storage/storage.service';
import { UserService } from 'app/services/user/user.service';
import { Constants } from 'app/variables/constants';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public platform = '';
  public errorMessage = '';
  public userToken ='';

  constructor(private router: Router,
    private _socialAuthService: SocialAuthService,
    private _spinnerService: NgxSpinnerService,
    private _userService: UserService,
    private _storageService: StorageService) {
    this._socialAuthService.initState.subscribe(() => { }, console.error,
      () => {
        console.log('all providers are ready');
        //  this._spinnerService.hide();
      });

    this._socialAuthService.authState.subscribe((user) => {
      let loginUser = new UserSignInModel();
      let signUpUser = new UserSignUpModel();
      loginUser.email = user.email;
      loginUser.externalAppName = this.platform;
      loginUser.externalAppToken = user.id;
      this.userToken = user.authToken;

      this._userService.signInUser(loginUser).subscribe((data) => {
        this._spinnerService.hide();
        this._storageService.setSession(Constants.SessionKey, JSON.stringify(data));
        this._storageService.setSession(Constants.AuthToken, user.authToken);
        this.router.navigate([`dashboard`]);
      },
        error => {
          this._spinnerService.hide();
          switch (error.status) {
            case 404:
            case 400:
              signUpUser.firstName = user.firstName;
              signUpUser.lastName = user.lastName;
              signUpUser.profileImage = user.photoUrl;
              signUpUser.externalAppName = this.platform;
              signUpUser.externalAppToken = user.id;
              signUpUser.email = user.email;
              this.SignUp(signUpUser);
              break;
            case 'InvalidUser':
              this.errorMessage = "Invalid user detected.";
              break;
            default:
              this.errorMessage = 'Our API seems to be down, we are out of free hits for this period, give us sometime to get back.';
              break;
          }
        });
    });

  }



  ngOnInit() {
    // this._spinnerService.show();
  }

  googleSignIn() {
    this.platform = 'google';
    this._spinnerService.show();
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  fbSignIn() {
    this.platform = 'facebook';
    this._spinnerService.show();
    this._socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  SignUp(signUpUser: UserSignUpModel) {
    this._userService.signUpUser(signUpUser).subscribe((data) => {
      this._spinnerService.hide();
      this._storageService.setSession(Constants.SessionKey, JSON.stringify(data));
      this._storageService.setSession(Constants.AuthToken, this.userToken);
      this.router.navigate([`dashboard/${data.user.id}`]);
    },
      error => {
        this._spinnerService.hide();
        switch (error.status) {
          case 'InvalidUser':
            this.errorMessage = "Invalid user detected.";
            break;
          default:
            this.errorMessage = 'Our API seems to be down, we are out of free hits for this period, give us sometime to get back.';
            break;
        }
      });
  }
}
