import { HttpClient } from "@angular/common/http";
import { Country } from "../country-list.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    country;
    path = "http://localhost:3000/api";
    constructor(private http: HttpClient) { }

    saveData(obj: Country) {
        return this.http.post(this.path + "/create", obj);
    }

    getData() {
        return this.http.get(this.path + "/givedata");
    }

    editData(id, obj) {
        return this.http.put(this.path + "/editdata/" + id, obj);
    }
    deletedata(id) {
        return this.http.delete(this.path + "/deletedata/" + id);
    }

    setCountry(country) {
        this.country = country;
    }
}