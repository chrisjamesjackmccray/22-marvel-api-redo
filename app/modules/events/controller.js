class EventsController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.id = $stateParams.id;
		this.getData();
	}

  getData() {
		this._$http
		.get(`http://gateway.marvel.com:80/v1/public/events/${this.id}?apikey=1c51377e8242564595ee97800ae287c7&hash=d55ef5c15d27b7bb770996115f25a020ec56de31`)
		.then((response) => {
			console.log(response);
			this.title = response.data.data.results[0].title;
			this.description = response.data.data.results[0].description;
			this.characters = response.data.data.results[0].characters;
			this.image = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;
		});
  }

}

export default EventsController
