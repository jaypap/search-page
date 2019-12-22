import { Component, OnInit } from '@angular/core';
import { SearchPageResult } from './models/search-page-result.model';
import { SearchParameters } from './models/search-parameters.model';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public insertValue: string;
  public searchPageResult: SearchPageResult[] = [];
  public searchParameters: SearchParameters;
  public language: string;
  public disableButton = true;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.language = window.navigator.language.slice(0, 2);
  }

  public arrayOfStrings(changeprop: string): void {
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

  public async clickRow(val: string) {
    this.insertValue = val;
    this.searchPageResult = [];
  }

  public navigateToGoogle(): void {
    window.open(`https://www.google.com/search?q=${this.insertValue}`, '_blank');
  }

}
