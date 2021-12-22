import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const client = new PrismaClient();
// schema를 기반으로 하는 client를 생성한다

export default client; // 밖으로 보내는 기본값을 client로 설정

//한 파일에 하나의 역활을 하도록 나눠주는게 좋다