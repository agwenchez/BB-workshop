import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PocketsHttpService } from '../../api/pockets.service';
// import { PocketsHttpService } from '../../public_api';

@Component({
  selector: 'bootcamp-pockets-list',
  templateUrl: './pockets-list.component.html',
  styleUrls: ['./pockets-list.component.scss'],
})
export class PocketsListComponent {
  
  pockets$!: Observable<any>;

  constructor( private pocketsService: PocketsHttpService, private router: Router) {
    this.getPockets()
  }

  getPockets(){
    this.pockets$ = this.pocketsService.pocketsGet()
    console.log("Pockets", this.pockets$)
  }


  navigateToDetails(id:string){
    this.router.navigate(['/pockets/details', id])
  }

}
