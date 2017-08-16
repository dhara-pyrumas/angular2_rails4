//= require services/heroes-service
//= require directives/hero-detail-component

var HeroesComponent = ng.core.Component({
	properties: ['model'],
	directives: [HeroDetailComponent],
	template: "<h2>My Heroes</h2> \
                <ul class='heroes'> \
                  <li *ngFor='#hero of heroes_list' [class.selected]='hero === selectedHero' (click)='onSelect(hero)'> \
                     <span class='badge'>{{hero.id}}</span> {{hero.name}} \
                  </li> \
                </ul> \
                <div *ngIf='selectedHero'> \
                  <h2> \
                    {{selectedHero.name | uppercase}} is my hero \
                  </h2> \
                  <button (click)='gotoDetail()'>View Details</button> \
                </div>"
}).Class({
			constructor: [
				HeroService, ng.router.Router, ng.http.Http, function(heroService, router, http) {
					this._heroService = heroService;
					this._router = router;
					this._http = http;
				}
			],
			ngOnInit: function() { this.getHeroes() },
			onSelect: function(hero) { this.selectedHero = hero },
			gotoDetail: function() { this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]); },
			getHeroes: function() {
				//we get the list from mock-heroes.js
				//this._heroService.getHeroes.then(heroes => this.heroes_list = heroes);

				//we get the list from the server
				this._heroService.getHeroes(this._http).subscribe(heroes => this.heroes_list = heroes);
			}
		});