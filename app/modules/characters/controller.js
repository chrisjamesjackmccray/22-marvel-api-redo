class CharactersController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.name = $stateParams.name;
		this.getData();
	}

  getData() {
		this._$http
		.get(`http://gateway.marvel.com:80/v1/public/characters?name=${this.name}&apikey=1c51377e8242564595ee97800ae287c7`)
		.then((response) => {
			console.log(response);
			this.id = response.data.data.results[0].id;
			this.description = response.data.data.results[0].description;
			this.image = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;

			this._$http
			.get(`http://gateway.marvel.com/v1/public/characters/${this.id}/events?apikey=1c51377e8242564595ee97800ae287c7`)
			.then((response) => {
				console.log(response);
				this.events = response.data.data.results;
			});
		});

  }

	eventImage(event) {
		return `${event.thumbnail.path}.${event.thumbnail.extension}`;
	}

}

export default CharactersController
