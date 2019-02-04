import { HttpClient } from "@angular/common/http";
import { Country } from "../country-list.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    saveData(obj: Country) {
        return this.http.post("http://localhost:3000/api/create", obj);
    }
}