import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { IStreamEvent } from 'src/core/classes/istream-event';

@Component({
  selector: 'app-streams-displayer',
  templateUrl: './streams-displayer.component.html',
  styleUrls: ['./streams-displayer.component.scss']
})
export class StreamsDisplayerComponent implements OnInit {
  @Input() reloadRequest: EventEmitter<any> = new EventEmitter();
  streams: IStreamEvent[];
  streamEventUrl = 'http://localhost:5009/StreamEvent/';

  constructor(private httpClient: HttpClient) {
    this.loadStreams();
  }

  ngOnInit(): void {
    this.reloadRequest.subscribe(success => {
      console.log('reload request', success);
      this.streams.push(success);
      this.loadStreams();
    });
  }

  loadStreams() {
    this.httpClient.get<IStreamEvent[]>(this.streamEventUrl).subscribe(
      result => {
        this.streams = result;
      }
    );
  }

  remove(id: number) {
    this.httpClient.delete(this.streamEventUrl + id).subscribe(success => {
      this.loadStreams();
    });
  }

}
