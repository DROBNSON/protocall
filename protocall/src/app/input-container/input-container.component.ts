import { Component, ElementRef, EventEmitter, Output, ViewChild , AfterViewInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css',
})
export class InputContainerComponent{

  characterCount?: number;


  @Output() translate: EventEmitter<String> = new EventEmitter();

  translateText() {}
}
