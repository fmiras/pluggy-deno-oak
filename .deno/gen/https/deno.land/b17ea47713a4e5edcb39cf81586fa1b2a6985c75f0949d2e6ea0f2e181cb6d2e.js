import { getTemplate } from "../utils/utils.ts";
export const oakAdapter = (renderEngine, config = {}) => {
    return async function (ctx, next) {
        if (!ctx.app.view) {
            ctx.app.view = {
                viewExt: config.viewExt || "",
                viewEngine: config.viewEngine,
                viewRoot: config.viewRoot || "",
                useCache: config.useCache || false,
                cache: config.cache || undefined,
            };
        }
        ctx.render = async function (file, data) {
            try {
                let template;
                const view = ctx.app.view;
                const filename = file + view.viewExt;
                if (view.useCache && view.cache?.has(file)) {
                    template = view.cache.get(file);
                }
                else {
                    template = await getTemplate(view.viewRoot, filename);
                    if (view.useCache) {
                        view.cache?.set(file, template);
                    }
                }
                ctx.response.body = await renderEngine(template, data ?? {}, ctx.app.view, filename);
                ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
            }
            catch (e) {
                ctx.response.status = 404;
                console.log(e.message);
            }
        };
        await next();
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2FrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2FrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWVoRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQVksQ0FDakMsWUFBb0IsRUFDcEIsU0FBa0MsRUFBRSxFQUNwQyxFQUFFO0lBQ0YsT0FBTyxLQUFLLFdBQVcsR0FBWSxFQUFFLElBQWM7UUFFakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUNiLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7Z0JBQzdCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDL0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSztnQkFDbEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUzthQUNqQyxDQUFDO1NBQ0g7UUFFRCxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssV0FBVyxJQUFZLEVBQUUsSUFBYTtZQUN0RCxJQUFJO2dCQUNGLElBQUksUUFBYSxDQUFDO2dCQUNsQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDMUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBR3JDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDMUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDO2lCQUNsQztxQkFBTTtvQkFDTCxRQUFRLEdBQUcsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFFdkQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ2pDO2lCQUNGO2dCQUtELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sWUFBWSxDQUNwQyxRQUFRLEVBQ1IsSUFBSSxJQUFJLEVBQUUsRUFDVixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFDWixRQUFRLENBQ1QsQ0FBQztnQkFDRixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLDBCQUEwQixDQUFDLENBQUM7YUFDdEU7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9