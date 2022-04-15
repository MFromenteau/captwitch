import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stream-request-displayer',
  templateUrl: './stream-request-displayer.component.html',
  styleUrls: ['./stream-request-displayer.component.scss']
})
export class StreamRequestDisplayerComponent {
  @Input() streamRequest: any;

  constructor() { }
}
