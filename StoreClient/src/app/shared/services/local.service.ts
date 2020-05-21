import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface Response {
  success: boolean;
  result: any[];
}

@Injectable({
  providedIn: "root",
})
export class LocalService {
  private dbPath = environment.assetsPath + "localDB/";
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Response> {
    return this.http.get<Response>(this.dbPath + "categories.json");
  }

  getAllProducts(): Observable<Response> {
    return this.http.get<Response>(this.dbPath + "products.json");
  }
}
