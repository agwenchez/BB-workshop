import { NgModule } from '@angular/core';
import {
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
} from '@backbase/accounts-transactions-journey-ang';
import {
    AccountsDetailsComponent,
    AccountsDetailsTabComponent,
    AccountsListComponent,
    AccountsManageComponent,
    AccountsTransactionsJourneyComponent,
    AccountsTransactionsJourneyModule,
    TransactionDetailsComponent,
    TransactionsListComponent,
  } from '@backbase/accounts-transactions-journey-ang';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { PUBSUB, PubSubService } from '@backbase/foundation-ang/web-sdk';
// import { environment } from '../../environments/environment';
import { Route } from '@angular/router';
import { environment } from '../../../environments/environment';

const customRoute: Route = {
  path: '',
  component: AccountsTransactionsJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: AccountsListComponent,
      data: { title: 'My Accounts' },
    },
    {
      path: 'manage',
      component: AccountsManageComponent,
    },
    {
      path: 'transactions',
      component: AccountsDetailsTabComponent,
      data: { title: 'Transactions' }, 
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'list',
          component: TransactionsListComponent,
          data: { title: 'Transactions' },
          children: [
            {
              path: 'detail',
              component: TransactionDetailsComponent,
            },
          ],
        },
        {
          path: 'details',
          component: AccountsDetailsComponent,
          data: { title: 'Details' },
        },
      ],
    },
  ],
};


@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot({route: customRoute})],
  providers: [
    TemplateRegistry,
    {
      provide: PUBSUB,
      useExisting: PubSubService,
    },
    {
      provide: AccountsTransactionsJourneyConfigurationToken,
      useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
        enableManageAccounts: environment.enableManageAccounts,
      },
    },

  ],
})
export class AccountsTransactionsJourneyBundleModule {}
