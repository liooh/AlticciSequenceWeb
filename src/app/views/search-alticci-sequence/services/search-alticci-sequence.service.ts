import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

export const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class SearchAlticciSequenceService {
    constructor(private http: HttpClient) { }

    search(num: number): Observable<bigint> {
        return this.http.get<bigint>(API_URL + '/alticci-sequence/alticci/' + num);
    }
}
