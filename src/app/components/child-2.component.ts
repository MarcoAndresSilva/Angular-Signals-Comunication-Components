import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CountService } from "../core/services/count.service";

@Component({
  selector: 'app-child-2',
  template: `
    <h3>Child 2 </h3>
    <p class="text-2xl">Count: {{countService.count()}}</p>
      <button mat-stroked-button (click)="sub()">Substract</button>
  `,
  standalone: true,
  host: {
    class: 'flex items-center flex-col '
  },
  imports: [MatButtonModule],
})
export default class Child2 {
  constructor(public countService: CountService) {}
  sub() {
    this.countService.sub();
  }
}
