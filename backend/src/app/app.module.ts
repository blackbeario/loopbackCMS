import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatDialogModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ApiModule} from "./shared/services/api.module";
import {appRoutingProviders, AppRouting} from "./app.routing";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRippleModule,
        SharedModule.forRoot(),
        ApiModule.forRoot(),
        AppRouting
    ],
    entryComponents: [AppComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
