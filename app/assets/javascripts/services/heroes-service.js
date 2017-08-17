//=require services/mock-heroes

var HeroService = function() {
	//we get the list from mock-heroes.js
	//this.getHeroes = Promise.resolve(Heroes);
	//this.getHero = function(id) { return Promise.resolve(Heroes).then(heroes => heroes.filter(hero => hero.id === id)[0]) };

	//we get the list from the server
//	this.getHeroes = function(http) { return http.get('/heroes').map(res => res.json()) };
//	this.getHero = function(http,id) { return http.get('/heroes/' + id).map(res => res.json()) };
	this.getHeroes = function(http) { return http.get('/heroes').map( res.json()) };
	this.getHero = function(http,id) { return http.get('/heroes/' + id).map( res.json()) };


	headers = new ng.http.Headers({ 'Content-Type': 'application/json' });
	options = new ng.http.RequestOptions({ headers: headers, method: "put" });
//	this.updateHero = function(http,id,name) { return http.post('/heroes/' + id, JSON.stringify({ id, name }), options) };
	this.updateHero = function(http,id,name) { return http.post('/heroes/' + id, JSON.stringify({ id: id, name: name }), options) };
};