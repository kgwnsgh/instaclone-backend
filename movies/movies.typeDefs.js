import { gql } from "apollo-server";

const typeDefs = gql`
    type Movie {
        id: Int!
        title: String!
        year: Int!
        genre: String
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        movies: [Movie]
        movie(id:Int!): Movie
    }

    type Mutation {
        createMovie(title:String!, year:Int!, genre:String): Movie
        deleteMovie(id:Int!): Movie
        updateMovie(id:Int! year:Int!): Movie
    }
`; 
//반듯이 schema와 migrations와 typeDefs는 통일이 되어있어야한다