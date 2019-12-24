import { Component, OnInit, HostListener } from '@angular/core';

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
  public innerWidth: number;
  public indx: number;
  public disableButton = true;

  /* inject search service */
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    /* initialize browsers' languange 'en' or 'el' */
    this.language = window.navigator.language.slice(0, 2);
    /* get windows size */
    this.getWindowSize(window.innerWidth);
  }

  /*
  * returns search result depenting the keyboard input
  * @params changeprop - the keyboard input property
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


  /*
  * go to specific goolge search result
  * @params instertValue - the choosenvalue
  * _blank - open in new tab
  */
  public navigateToGoogle(): void {
    window.open(`https://www.google.com/search?q=${this.insertValue}`, '_blank');
  }

  /*
   * Keep tracking windows'width updates throw @HostListener
   calls getWindowSize func
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getWindowSize(window.innerWidth);
  }

/*
    * get windows width size
    * @params windowsWidth - the windows' width
    * check the width and give the number of the table rows
    * pc-table mode 20 rows mobiles 10 rows
   */
  private getWindowSize(windowWidth) {
    this.innerWidth = windowWidth;
    this.innerWidth < 1024 ? this.indx = 10 : this.indx = 20;
  }

}
