import { env } from "./config/env";
import Koa from "koa";
import { corsMiddleware } from "./middlewares/cors.middleware";
import { bodyParser } from "@koa/bodyparser";
import { router } from "./routes/router";
import helmet from "koa-helmet";

const app = new Koa();


// Middlewares de bases
app.use(corsMiddleware()),
app.use(helmet());
app.use(bodyParser());


// router
app.use(router.routes()).use(router.allowedMethods());

// Démarrage du serveur
const port = env.PORT;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
