import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../../theme';

@Injectable()
export class ThreatsService {
    constructor(private _baConfig: BaThemeConfigProvider) {}

    getData() {
        return [
        ];
    }
}
