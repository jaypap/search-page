import { Routes } from '@angular/router';
import { SearchPageComponent } from './search-page.component';


export const searcPageRoutes: Routes = [
    { path: '', redirectTo: 'searchpage', pathMatch: 'full' },
    {
        path: 'searchpage',
        component: SearchPageComponent,
    }
];
