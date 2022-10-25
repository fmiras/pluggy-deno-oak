import { Router, helpers } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import {app} from "./mod.ts";

const router = new Router();

router
	.post('/connect', (context) => {
    const connectData = JSON.parse(context.request.body)
		context.response.body = "Recieved!";
		context.response.status = 200;

		// logs the body of the post request
		console.log(connectData);
	})

	//route that renders the demo page
	.get('/', async (context) => {
		// renders URL parameters and queries
		context.render("demo", {
			demoText: "This text is being shown from the routes.ts file! I can be edited to show other text, even stuff that's specific to the user! Try adding parameters by going to /demo/<param> or add queries by going to /demo?key=value",
			reqParams: "none. try going to /demo/<param>", 
			reqQueries: context.request.url.searchParams
		});
	})
	// route that renders the demo page with parameters
	.get('/demo/:param', (context) => {
		// example of URL parameters in use
		context.render("demo", {
			demoText: "This text is being shown from the routes.ts file! I can be edited to show other text, even stuff that's specific to the user! Try adding parameters by going to /demo/<param> or add queries by going to /demo?key=value",
			reqParams: JSON.stringify(context.params), 
			reqQueries: context.request.url.searchParams
		});
	})

export default router;