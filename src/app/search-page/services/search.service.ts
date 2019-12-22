import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SearchPageResult } from '../models/search-page-result.model';
import { SearchParameters } from '../models/search-parameters.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  protected httpClient: HttpClient;

  constructor(
    httpClient: HttpClient
  ) {

    this.httpClient = httpClient;
  }

  public get(url: string, params: SearchParameters): Observable<any> {
    const options: { headers?: HttpHeaders, params?: any } = {
      headers: new HttpHeaders()
    };
    options.params = Object.assign(params);
    return this.httpClient.get(url, options).pipe(delay(500));
  }

}
