import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App is our top level component
import { routing } from './app.routing';
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { UserContext } from './core/services/userContext';
import { InterceptorModule } from './core/interceptor/interceptor.module';
import { SessionStorage } from './core/services/sessionStorage';

export type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

@NgModule({
    bootstrap: [App],
    declarations: [
        App
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgaModule.forRoot(),
        NgbModule.forRoot(),
        PagesModule,
        routing,
        InterceptorModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        AppState,
        GlobalState,
        UserContext,
        SessionStorage
    ]
})

export class AppModule {
    constructor(public appState: AppState) {
    }
}
