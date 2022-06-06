/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { PocketsHttpService } from '../../api/pockets.service';
// import { PocketsHttpService } from '@bootcamp/pockets-api';

@Component({
  selector: 'bootcamp-pocket-details',
  templateUrl: './pocket-details.component.html',
  styleUrls: ['./pocket-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PocketDetailsComponent implements OnInit {
  pocketDetails$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private pocketsService: PocketsHttpService
  ) {}

  ngOnInit() {
    this.fetchPocket();
  }

  fetchPocket() {
    const pocketId = this.route.snapshot.params['id'];
    this.pocketDetails$ = this.pocketsService.pocketsIdGet({ id: pocketId }).pipe(
      map((response: any) => response[0])
    );
  }
}
