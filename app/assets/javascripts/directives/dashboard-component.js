//= require services/heroes-service

var DashboardComponent = ng.core.Component({
	template: "<h3>Top Heroes</h3> \
                <div class='grid grid-pad'> \
                  <div *ngFor='#hero of heroes' (click)='gotoDetail(hero)' class='col-1-4' > \
                    <div class='module hero'> \
                      <h4>{{hero.name}}</h4> \
                    </div> \
                  </div> \
                </div>"
}).Class({
			constructor: [
				HeroService, ng.router.Router, ng.http.Http, function(heroService, router, http) {
					this._heroService = heroService;
					this._router = router;
					this._http = http;
				}
			],
			ngOnInit: function() {
				//we get the list from mock-heroes.js
				//this._heroService.getHeroes.then(heroes => this.heroes = heroes.slice(1,5))

				//we get the list from the server
				this._heroService.getHeroes(this._http).subscribe(heroes => this.heroes = heroes.slice(1,5));
			},
			gotoDetail: function(hero) { this._router.navigate(['HeroDetail', { id: hero.id }]); }
		});