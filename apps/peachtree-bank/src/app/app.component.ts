import { Component } from '@angular/core';
import { LayoutService } from '@backbase/ui-ang';

@Component({
  selector: 'bootcamp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'peachtree-bank';

  constructor(public readonly layoutService:LayoutService){
    
  }
}
