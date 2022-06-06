/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class PocketsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      req.url.endsWith('client-api/v2/accessgroups/users/permissions/summary')
    ) {
      return of(
        new HttpResponse({
          status: 200,
          body: entitlementsConfiguration,
        })
      );
    }

    return next.handle(req);
  }
}

interface EntitlementsConfiguration {
  additions: object;
  resource: string;
  function: string;
  permissions: object;
}

const entitlementsConfiguration: EntitlementsConfiguration[] = [
  {
    additions: {},
    resource: 'Pockets',
    function: 'Goals',
    permissions: {
      create: true,
    },
  },
  {
    additions: {},
    resource: 'Payments',
    function: 'Transfer',
    permissions: {
      create: true,
      view: true,
    },
  },
];
