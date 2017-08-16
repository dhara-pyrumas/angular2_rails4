//= require directives/dashboard-component
//= require directives/heroes-component
//= require directives/hero-detail-component
//= require services/heroes-service

var MyApp = ng.core.Component({
	selector: 'my-app',
	directives: [ng.router.ROUTER_DIRECTIVES],
	providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS, HeroService], // ng.http.HTTP_PROVIDERS enables to use http and get the list from the server
	template: "<h1>{{title}}</h1> \
                <nav> \
                  <a [routerLink]=\"['Heroes']\">Heroes</a> \
                  <a [routerLink]=\"['Dashboard']\">Dashboard</a> \
                </nav> \
                <router-outlet></router-outlet>"
}).Class({
			constructor: [ ng.router.Router, function(router) {
				router.config([
					{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
					{ path: '/heroes-list', name: 'Heroes', component: HeroesComponent },
					{ path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
				]);

				this.title = 'Tour of Heroes';
			}]
		});