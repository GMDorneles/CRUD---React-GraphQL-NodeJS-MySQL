import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { graphql } from "graphql";
import { Users } from "./Entities/Users";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "gaphqlcrud",
    username: "root",
    password: "gabrielly",
    logging: true,
    synchronize: false, // se manter true sempre vai tentar criar novas tabelas
    entities: [Users],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3001, () => {
    console.log("server runing");
  });
};
main().catch((err) => {
  console.log(err);
});
