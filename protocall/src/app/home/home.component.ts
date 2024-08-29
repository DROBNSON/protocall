import { Component } from '@angular/core';
import { InputContainerComponent } from '../input-container/input-container.component';
import { OutputContainerComponent } from "../output-container/output-container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputContainerComponent, OutputContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
