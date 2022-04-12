import { Component, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStreamEvent } from 'src/core/classes/istream-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capTwitch.front';
  newStream: IStreamEvent;
  streamEventUrl = 'http://localhost:5009/StreamEvent';

  streamAdded: EventEmitter<IStreamEvent> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.newStream = <IStreamEvent>{};
  }

  save() {
    this.httpClient.post<IStreamEvent>(this.streamEventUrl, this.newStream).subscribe(
      result => {
        this.streamAdded.emit(result);
      },
      error => {
        alert(error);
      }
    );
  }
}
