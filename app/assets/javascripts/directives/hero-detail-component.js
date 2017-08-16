//= require services/heroes-service

var HeroDetailComponent = ng.core.Component({
	template: "<div *ngIf='hero'> \
                <h2>{{hero.name}} details</h2> \
                <div> \
                  <label>id: </label>{{hero.id}} \
                </div> \
                <div> \
                  <label>name: </label> \
                  <input [(ngModel)]='hero.name' placeholder='name'/> \
                </div> \
                <button (click)='goBack()'>Back</button> \
                <button (click)='updateHero(hero)'>Update</button> \
              </div>"
}).Class({
			constructor: [
				HeroService, ng.router.RouteParams, ng.http.Http, function(heroService, routeParams, http) {
					this._heroService = heroService;
					this._routeParams = routeParams;
					this._http = http;
				}
			],
			ngOnInit: function() {
				id = +this._routeParams.get('id');

				//we get the list from mock-heroes.js
				//this._heroService.getHero(id).then(hero => this.hero = hero);

				//we get the list from the server
				this._heroService.getHero(this._http, id).subscribe(hero => this.hero = hero);
			},
			goBack: function() { window.history.back(); },
			updateHero: function(hero) { this._heroService.updateHero(this._http, hero.id, hero.name).subscribe(alert("updated!")); }
		});