// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  ProductSummaryHttpServiceMocksProvider,
} from '@backbase/data-ang/arrangements';
import { CategoriesHttpServiceMocksProvider } from '@backbase/data-ang/categories-management';
import { FinancialInstitutionManagerClientHttpServiceMocksProvider } from '@backbase/data-ang/financial-institution-manager';
import { TransactionClientHttpServiceMocksProvider } from '@backbase/data-ang/transactions';
import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { PocketsHttpServiceMocksProvider } from '@bootcamp/pockets-api';

export const environment = {
  production: false,
  mockProviders:[
    createMocksInterceptor(),
    ArrangementsHttpServiceMocksProvider,
    ProductSummaryHttpServiceMocksProvider,
    AccountsHttpServiceMocksProvider,
    TransactionClientHttpServiceMocksProvider,
    CategoriesHttpServiceMocksProvider,
    FinancialInstitutionManagerClientHttpServiceMocksProvider,
    PocketsHttpServiceMocksProvider
  ],
  enableManageAccounts: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
