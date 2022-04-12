import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStreamEvent } from 'src/core/classes/istream-event';

@Component({
  selector: 'app-stream-displayer',
  templateUrl: './stream-displayer.component.html',
  styleUrls: ['./stream-displayer.component.scss']
})
export class StreamDisplayerComponent implements OnInit {
  @Input() stream: IStreamEvent;
  @Output() removeRequest: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  remove() {
    this.removeRequest.emit(this.stream.id);
  }
}
