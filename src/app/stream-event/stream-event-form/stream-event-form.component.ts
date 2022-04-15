import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StreamEventService } from 'src/app/core/services/stream-event/stream-event.service';
import { IStreamEvent } from 'src/core/classes/istream-event';

@Component({
  selector: 'app-stream-event-form',
  templateUrl: './stream-event-form.component.html',
  styleUrls: ['./stream-event-form.component.scss']
})
export class StreamEventFormComponent implements OnInit {
  newStream: IStreamEvent;

  constructor(private streamEventService: StreamEventService) {
    this.newStream = <IStreamEvent>{};
  }

  ngOnInit(): void {
  }

  save() {
    this.streamEventService.add(this.newStream).subscribe(
      result => {
        this.streamEventService.streamAdded.emit(result);
      },
      error => {
        alert(error);
      }
    );
  }

}
