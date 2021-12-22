import {ApolloServer} from "apollo-server"; // npm i apollo-server graphql 설치 필요 npm i nodemon --server-dev 통해 서버 자동 재시작
import schema from "./schema.js"

// import 형식을 사용하기 위해서는 package.json에 "type": "module" 추가해야한다
// babel 을 설치한 이유는 node의 버전에 따라 실행이 안되는것을 방지하기 위해서 바벨을 사용한다
// npm install @babel/preset-env --save-dev 프로그램 설치 없이 자동으로 그 언어의 최신 언어를 적용해준다


const server = new ApolloServer({
    schema
});

server.listen().then(() => console.log("Server is running on http://localhost:4000"));