const resolvers = {
	Query:{
		tracksForHome: (_,__, {dataSources}) => {
			return dataSources.trackAPI.getTracksForHome();
		}
	},
	Track:{
		getAuthor:({authorId}, _, {dataSources}) => {
			return dataSources.trackAPI.getAuthor(authorId);
		}
	}
}

module.exports = resolvers;