import { Application, send } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import router from "./routes.ts";
import {
  bold,
  cyan,
  green,
  yellow,
} from "https://deno.land/std@0.84.0/fmt/colors.ts";

import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://deno.land/x/view_engine@v1.4.5/mod.ts";


export const app = new Application();
const PORT = 8000;

// Initialize EJS for templating :D
const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();
app.use(viewEngine(oakAdapter, ejsEngine, {
	viewRoot: "./views",
	viewExt: ".ejs",
}));

// use the router that is in routes.ts
app.use(router.routes());
app.use(router.allowedMethods());

// Logging Middleware
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)} - ${
      bold(
        String(rt),
      )
    }`,
  );
});

// Timing Middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

/**
 * Static File Server Here.
 * any files in the ./static directory are
 * automatically served, such as the index.html file.
 */
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
});

await app.listen({ port: PORT });