import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProjectsViewModel } from "app/models/home";
import { environment } from "environments/environment";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    _API: string;
    constructor(public http: HttpClient) {
      this._API = environment.API_URL + '/';
    }

    getUserProjects(userId: any) : Observable<UserProjectsViewModel[]>  {
        return this.http.get<UserProjectsViewModel[]>(this._API + `Management/Projects?userId=${userId}`);
      }
}