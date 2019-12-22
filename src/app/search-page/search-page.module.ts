import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatTableModule,
  MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

/* MatSelectModule */
// Components

import { SearchPageComponent } from './search-page.component';
import { SearchService } from './services/search.service';


export const myDeclarations = [SearchPageComponent];

export const myImports = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  FormsModule
];

export const myProviders = [SearchService];

@NgModule({

  declarations: [
    ...myDeclarations
  ],
  imports: [
    ...myImports
  ],
  providers: [...myProviders]
})
export class SearchPageModule { }
