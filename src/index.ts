//gerenciador de rotas
import express from "express";

import { usersRoute } from "./routes/users.route";
import { statusRoute } from "./routes/status.route";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";

const app = express();
app.use(express.urlencoded({ extended: true }))

//config interpretar json
app.use(express.json());


//config rotas
app.use(authorizationRoute)
app.use(statusRoute)
app.use(jwtAuthenticationMiddleware, usersRoute)


// config dos handlers Erros
app.use(errorHandler);

//inicialização servidor
app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000!")
})