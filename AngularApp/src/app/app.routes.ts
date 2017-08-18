import { Routes } from '@angular/router';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';

export const appRoutes: Routes = [
	{
		path:'circular',
		component: CircularComponent
	},
	{
		path: 'search',
		component: SearchComponent
	}
];