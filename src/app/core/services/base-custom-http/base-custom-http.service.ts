import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BaseCustomHttpService {
  apiUrl = environment.apiUrl;

  constructor(protected httpClient: HttpClient, endpoint: string) {
    this.apiUrl += `${endpoint}/`;
  }

}
