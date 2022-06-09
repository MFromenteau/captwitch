import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { IStreamEvent } from 'src/core/classes/istream-event';
import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class StreamRequestService extends CustomHttpService {
  public streamAdded: EventEmitter<IStreamEvent> = new EventEmitter();

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'StreamRequest');
  }

  getScore(streamRequestId: string) {
    return this.httpClient.get<any>(this.apiUrl + `${streamRequestId}/score`);
  }
}
