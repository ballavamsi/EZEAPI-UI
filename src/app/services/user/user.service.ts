import { Injectable } from '@angular/core';
import { UserSignInModel, UserSignUpModel } from 'app/models/User';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(public api: ApiService) { }

  public signInUser(data: UserSignInModel) {
    return this.api.signInUser(data);
  }

  public signUpUser(data: UserSignUpModel) {
    return this.api.signUpUser(data);
  }
}
