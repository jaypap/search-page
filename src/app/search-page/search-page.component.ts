import { Component, OnInit } from '@angular/core';

// Models
import { SearchPageResult } from './models/search-page-result.model';
import { SearchParameters } from './models/search-parameters.model';

// Services
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  /* properties */
  public insertValue: string;
  public searchPageResult: SearchPageResult[] = [];
  public searchParameters: SearchParameters;
  public language: string;
  public disableButton = true;

  /* inject search service */
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    /* initialize browsers' languange 'en' or 'el' */
    this.language = window.navigator.language.slice(0, 2);
  }


  /*
  * check if the input length is more than 2 letters
  * get request call with parameters
  * enable search button if the call returns results
  */
  public getRequestResults(changeprop: string): void {
    if (changeprop.length < 2) {
      this.searchPageResult = [];
      this.disableButton = true;
    } else {
      this.searchService.get('http://35.180.182.8/Search', {
        keywords: changeprop,
        language: this.language
      }).subscribe((result) => {
        this.searchPageResult = result.entries;
        this.searchPageResult.length > 0 ? this.disableButton = false : this.disableButton = true;
      });
    }
  }

  /*
  * click the specific row result from the dropdown menu
  * emapty the search array - close the dropdown menu
  * */
  public clickRowResult(val: string) {
    this.insertValue = val;
    this.searchPageResult = [];
  }

  /*go to specific goolge search result   */
  public navigateToGoogle(): void {
    window.open(`https://www.google.com/search?q=${this.insertValue}`, '_blank');
  }

}
