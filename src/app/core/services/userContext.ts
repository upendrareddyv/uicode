import { Injectable } from '@angular/core';
import { SessionStorage } from './sessionStorage';

@Injectable()
export class UserContext {
    authToken: String = null;
    constructor(private sessionStorage: SessionStorage) {
        const sessionData = this.sessionStorage.getItem();
        if (sessionData) {
            this.authToken = sessionData.authToken;
        }
    }
    setAuthToken(authToken) {
        this.authToken = authToken;
    }
    getAuthToken() {
        return this.authToken;
    }
}
