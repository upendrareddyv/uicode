import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorage {
    sessionStorage;
    storageKey: String = 'cyberNeitzData';
    constructor() {
        this.sessionStorage = sessionStorage;
    }
    setItem(data) {
        this.sessionStorage.setItem(this.storageKey, JSON.stringify(data));
    }
    getItem() {
        const sessionData = this.sessionStorage.getItem(this.storageKey);
        return JSON.parse(sessionData);
    }
}
