import { Router } from "https://deno.land/x/oak@v6.2.0/mod.ts";
const router = new Router();
router
    .get('/hello', (context) => {
    context.response.body = "Hello World!";
    context.response.status = 200;
})
    .post('/', (context) => {
    context.response.body = "Recieved!";
    context.response.status = 200;
    console.log(context.request.body);
})
    .get('/redirect', (context) => {
    context.response.redirect("https://repl.it/@RoBlockHead");
})
    .get('/demo', async (context) => {
    context.render("demo", {
        demoText: "This text is being shown from the routes.ts file! I can be edited to show other text, even stuff that's specific to the user! Try adding parameters by going to /demo/<param> or add queries by going to /demo?key=value",
        reqParams: "none. try going to /demo/<param>",
        reqQueries: context.request.url.searchParams
    });
})
    .get('/demo/:param', (context) => {
    context.render("demo", {
        demoText: "This text is being shown from the routes.ts file! I can be edited to show other text, even stuff that's specific to the user! Try adding parameters by going to /demo/<param> or add queries by going to /demo?key=value",
        reqParams: JSON.stringify(context.params),
        reqQueries: context.request.url.searchParams
    });
})
    .get('/login', (context) => {
    if (context.cookies.get("logged_in_username") != null)
        return context.response.redirect("/secret");
    context.render("login", { loginText: "" });
})
    .post('/login', async (context) => {
    let formData = await context.request.body({ type: 'form' }).value;
    if (!formData.get("username") || !formData.get("password"))
        return context.render("login", { loginText: "Bad Request!" });
    if (context.cookies.get("logged_in_username") != null)
        return context.response.redirect("/secret");
    if (formData.get("password") != "password123")
        return context.render("login", { loginText: "Incorrect Password!" });
    context.cookies.set("logged_in_username", formData.get("username"));
    context.response.redirect("/secret");
})
    .get('/logout', (context) => {
    context.cookies.delete("logged_in_username");
    context.response.redirect("/login");
})
    .get("/secret", (context) => {
    if (context.cookies.get("logged_in_username") == null)
        return context.response.redirect("/login");
    context.render("logged_in", { username: context.cookies.get("logged_in_username") });
});
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQVcsTUFBTSx1Q0FBdUMsQ0FBQztBQUd4RSxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBRzVCLE1BQU07S0FFSixHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFFMUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUMvQixDQUFDLENBQUM7S0FHRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFFdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0tBR0QsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBRTdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFDO0tBR0QsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFFL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDdEIsUUFBUSxFQUFFLDBOQUEwTjtRQUNwTyxTQUFTLEVBQUUsa0NBQWtDO1FBQzdDLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO0tBQzVDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztLQUVELEdBQUcsQ0FBQyxj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