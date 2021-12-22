import client from "../client.js";
export default {
Mutation: {
    createMovie: (_, {title, year, genre }) => 
    client.movie.create({data: {
        title,
        year,
        genre,
    }}),
        deleteMovie: (_, {id}) => client.movie.delete({where: {id}}),
        updateMovie: (_, {id, year}) => client.movie.update({where:{ id },data: { year }}),
    }
}
// prisma를 통해 데이터 베이스와 소통하고 npx prisma studio로 서버를 열어서 데이터베이스를 눈으로 확인 할수 있다