export class UserSignInModel {
    email: string;
    password: string;
    externalAppName: string;
    externalAppToken: string;
  }
  
  export class SocialPlatform {
    platform: string;
    platformid: string;
    platformImage: string;
  }
  
  export class UserLoginResponse {
    user: userResponse;
    tokens: userToken;
  }

  export class UserSignUpModel {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    platformdetail: SocialPlatform;
    profileImage: string;
    password: string;
    externalAppName: string;
    externalAppToken: string;    
  }

  export class userResponse{
    id: any;
    email: string;
    profileImage: string
    firstName: string;
    lastName: string;
  }

  export class userToken{
    token: string
    refreshToken: string;
    expiresIn: string;
  }
  