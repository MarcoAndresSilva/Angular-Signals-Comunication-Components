import { Component} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CountService } from "../core/services/count.service";

@Component({
  selector: 'app-child-1',
  template: `
    <h3>Child 1 </h3>
    <p class="text-2xl">Count: </p>
      <button mat-flat-button (click)="add()">Add</button>
  `,
  host: {
    class: 'flex items-center flex-col '
  },
  standalone: true,
  imports: [MatButtonModule],
})
export default class Child1 {

  constructor(public countService: CountService) { }
  add() {
    this.countService.add();
  }
}
