import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseCustomHttpService } from '../base-custom-http/base-custom-http.service';

export class CustomHttpService extends BaseCustomHttpService {

  constructor(protected override httpClient: HttpClient, endpoint: string) {
    super(httpClient, endpoint);
  }

  public getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  public remove(id: number) {
    return this.httpClient.delete(this.apiUrl + id);
  }

  public add(newStream: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, newStream);
  }
}
