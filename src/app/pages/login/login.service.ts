import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    login(loginData) {
        const url = '/auth/authLog';
        return this.http.post(url, loginData);
    }
}
