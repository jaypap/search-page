import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
// Modules
import { SearchPageModule } from './search-page/search-page.module';



import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SearchPageModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
