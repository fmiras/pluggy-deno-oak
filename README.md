# Deno Oak Template 
## By [RoBlockHead](https://replit.com/@RoBlockHead)
This template shows off how to use the Oak web framework in the Deno TypeScript/JavaScript runtime. In this template, you'll find various examples of features of the Oak framework. 

### Features
- Basic Form Authentication 
  *  Insecure, see note below.
- Cookies!
- Static File Serving
- Request Parameters & Queries
- EJS Templating

### Before Using
Before using this template, if you don't understand how Deno works, learn more about deno [here](https://deno.land/). There are also a lot of cool things that this template uses in the Oak web framework that you can learn about [here](https://oakserver.github.io/oak/).
### How to use

To start off, this template follows the [Deno Style Guide](https://deno.land/manual@v1.8.3/contributing/style_guide), which mandates that the entrypoint to the app be the `mod.ts` file. For this template app, it uses network access and file read access, which must be specifically declared when running the app from the console: 
```shell
deno run --allow-net --allow-read mod.ts
```
This template also includes a `.replit` file, so you can just hit the run button on replit to start it. 

In terms of customization of the app, you can customize pretty much everything. The routes are managed in the `routes.ts` file, while the main server and middleware are managed in the `mod.ts` file. You can learn more about how to use Oak in the [Oak documentation](https://doc.deno.land/https/deno.land/x/oak/mod.ts).


### Things to note 
This template just aims to show off features of the Oak framework. This means that the examples, such as logging in, are not made to be secure, therefore, should not be used outside of a demo. If you're looking to do authentication, check out a recent tutorial on it from a reputable source. 