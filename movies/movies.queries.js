import client from "../client.js";

export default {
    Query: {
        movies: () => client.movie.findMany(), // 데이터베이스 모든 movie를 
        movie: (_,{id}) => client.movie.findUnique({where:{id}}),
    },
};