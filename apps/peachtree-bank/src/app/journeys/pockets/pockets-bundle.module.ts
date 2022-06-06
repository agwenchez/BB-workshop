/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { PocketsJourneyComponent } from '../../../../../../libs/pockets-api/src/lib/views/pockets/pockets.component';
import { ButtonModule } from '@backbase/ui-ang';
import { PocketsListComponent } from '../../../../../../libs/pockets-api/src/lib/views/pockets-list/pockets-list.component';
import { PocketDetailsComponent } from '../../../../../../libs/pockets-api/src/lib/views/pocket-details/pocket-details.component';
import { CommonModule } from '@angular/common';
import { ProgressbarModule } from '@backbase/ui-ang';
import { PocketSvgComponent } from '../../../../../../libs/pockets-api/src/lib/views/pocket-svg/pocket-svg.component';
import { HeaderModule } from '@backbase/ui-ang';
import { IconModule } from '@backbase/ui-ang';
import { AmountModule } from '@backbase/ui-ang';
import { EntitlementsModule } from '@backbase/foundation-ang/entitlements';

const customRoutes: Route[] = [
  {
    path: '',
    component: PocketsJourneyComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: PocketsListComponent,
      },
      {
        path: 'details/:id',
        component: PocketDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PocketsJourneyComponent,
    PocketsListComponent,
    PocketDetailsComponent,
    PocketSvgComponent,
  ],
  imports: [
    ButtonModule,
    CommonModule,
    ProgressbarModule,
    IconModule,
    AmountModule,
    HeaderModule,
    EntitlementsModule,
    RouterModule.forChild(customRoutes),
  ],
  providers: [TemplateRegistry],
  exports: [
    PocketsJourneyComponent,
    PocketsListComponent,
    PocketDetailsComponent,
    PocketSvgComponent,
  ],
})
export class PocketsJourneyBundleModule {}
