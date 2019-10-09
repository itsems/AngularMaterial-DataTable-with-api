import { Injectable } from "@angular/core";

// import HttpClient
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY = "https://randomuser.me/api/?results=20";

  constructor(private httpClient: HttpClient) {}
  public getUsers() {
    return this.httpClient.get(`${this.API_KEY}`);
  }
}
