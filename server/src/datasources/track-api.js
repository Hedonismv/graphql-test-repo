const {RESTDataSource} = require("apollo-datasource-rest")


class TrackApi extends RESTDataSource{
	constructor() {
		super();
		this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'
	}

	getTracksForHome(){
		return this.get('tracks');
	}

	getAuthor(authorId){
		return this.get(`author/${authorId}`);
	}


}

module.exports = TrackApi;