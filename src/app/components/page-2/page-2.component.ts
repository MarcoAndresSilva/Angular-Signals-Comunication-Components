import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CountService } from "../../core/services/count.service";

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class Page2Component {

    constructor(public countService: CountService) {}
  
  add() {
    this.countService.add();
  }
  sub() {
    this.countService.sub();
  }
  reset() {
    this.countService.reset();
  }

}
