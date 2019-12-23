import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SearchParameters } from '../models/search-parameters.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /* properties */
  protected httpClient: HttpClient;

  constructor(
    /* inject HttpClient service - performs requests */
    httpClient: HttpClient
  ) {

    this.httpClient = httpClient;
  }
  /*Create our get service using get method from httpClient service
  * @param url - the url call http://35.180.182.8/Search
  * @param params -the parameters we pass to our call-
  * SearchParameters object with properties such as language, keywords (input), limit (optional)
  * @param options - property of get method, object with two parameters - headers:HttpHeaders and  SearchParameters object
  * return get method with 500 ms delay
  */
  public get(url: string, params: SearchParameters): Observable<any> {
    const options: { headers?: HttpHeaders, params?: any } = {
      headers: new HttpHeaders()
    };
    options.params = Object.assign(params);
    return this.httpClient.get(url, options).pipe(delay(500));
  }

}
