import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { IconModule, LayoutModule, LogoModule } from '@backbase/ui-ang';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PocketsInterceptor } from './interceptors/pockets.interceptor';
import { EntitlementsModule } from '@backbase/foundation-ang/entitlements';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IconModule,
    LayoutModule,
    HttpClientModule,
    LogoModule,
    NgbDropdownModule,
    EntitlementsModule,
  ],
  providers: [
    ...(environment.mockProviders || []),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PocketsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
