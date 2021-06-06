import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'app/variables/constants';
import { Observable } from 'rxjs';
import { StorageService } from './storage/storage.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _storageService: StorageService){}
   intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method
    req = this.addUserToken(req);
    return next.handle(req);
   }

   private addUserToken(request: HttpRequest<any>): HttpRequest<any> {
    var userDetails = this._storageService.getUserSessionDetails();
    if(userDetails != null) {
    return request.clone({
      headers: request.headers.set("Token", userDetails?.tokens.token)
    });
    }
    else{
       if(request.url.indexOf("one-user") > -1 || request.url.indexOf("user") > -1) 
       {
        return request.clone({
          headers: request.headers.set(Constants.ApplicationId, "4")
                                  .set(Constants.ApplicationToken, "dd694709-97dd-4854-ad9d-cafa23ead428")
        });
       }
    }
  }
}
