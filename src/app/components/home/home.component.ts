import { Component } from "@angular/core";
import CountComponent from "../count/count.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CountComponent],
})
export default class Home {
  title = 'Home';




}
