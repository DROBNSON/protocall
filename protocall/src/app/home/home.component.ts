import { Component } from '@angular/core';
import { InputContainerComponent } from '../input-container/input-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
