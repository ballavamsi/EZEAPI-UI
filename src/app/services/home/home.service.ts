import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _api: ApiService) { }

  public getUserProjects(userId: any) {
    return this._api.getUserProjects(userId);
  }
}