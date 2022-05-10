
const {gql} = require("apollo-server")

const typeDefs = gql`
	
	type Mutation{
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}
	
    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated track after a successful mutation"
        track: Track
    }
    
    "Get tracks array for homepage grid"
    type Query {
        tracksForHome:[Track!]!
        track(id: ID!): Track
    }
    
    "Author of a complete track or module"
    type Author{
        id: ID!
        name: String!
        photo: String
    }
    
    "The track is a group of Modules that teaches about a specific topic"
    type Track{
		id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        "The track's complete description, can be in Markdown format"
        description: String
        "The number of types a track has been viewed"
        numberOfViews: Int
        modules: [Module!]!
    }
    
    type Module{
        id:ID!
        title: String!
        length: Int
    }
    
    
`;


module.exports = typeDefs;