import { Component, OnInit } from '@angular/core';
import { StreamEventService } from 'src/app/core/services/stream-event/stream-event.service';
import { IStreamEvent } from 'src/core/classes/istream-event';

@Component({
  selector: 'app-streams-displayer',
  templateUrl: './streams-displayer.component.html',
  styleUrls: ['./streams-displayer.component.scss']
})
export class StreamsDisplayerComponent implements OnInit {
  streams: IStreamEvent[];

  constructor(private streamEventService: StreamEventService) {
    this.loadStreams();
  }

  ngOnInit(): void {
    this.streamEventService.streamAdded.subscribe(success => {
      this.streams.push(success);
      this.loadStreams();
    });
  }

  loadStreams() {
    this.streamEventService.getAll().subscribe(
      result => {
        this.streams = result;
      }
    );
  }

  remove(id: number) {
    this.streamEventService.remove(id).subscribe(success => {
      this.loadStreams();
    });
  }

}
