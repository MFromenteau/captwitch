import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseCustomHttpService } from '../base-custom-http/base-custom-http.service';

export class CustomHttpService extends BaseCustomHttpService {

  constructor(protected override httpClient: HttpClient, endpoint: string) {
    super(httpClient, endpoint);
  }

  public getAll(filters: any = null): Observable<any[]> {
    const params = new URLSearchParams(filters).toString();
    return this.httpClient.get<any[]>(this.apiUrl +'?'+ params);
  }

  public remove(id: number) {
    return this.httpClient.delete(this.apiUrl + id);
  }

  public add(newStream: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, newStream);
  }

  public patch(id: any, patch: any) {
    return this.httpClient.patch(this.apiUrl + id, patch);
  }
}
