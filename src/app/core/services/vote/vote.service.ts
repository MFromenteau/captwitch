import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoteStatus } from '../../classes/vote-status';
import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService extends CustomHttpService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'vote');
  }

  public addOrUpdate(streamRequestId: string, status: VoteStatus) {
    const payload = { streamRequestId, status};
    return this.httpClient.post<any>(this.apiUrl + 'addOrUpdate', payload);
  }
}
