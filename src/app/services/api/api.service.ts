import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProjectsResponse } from "app/models/home";
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

    getUserProjects(userId: any,pageNo: any,pageSize: any,detailed: boolean) : Observable<UserProjectsResponse>  {
        return this.http.get<UserProjectsResponse>(this._API + `Management/Projects?userId=${userId}&PageNo=${pageNo}&PageSize=${pageSize}&Detailed=${detailed}`);
      }
}