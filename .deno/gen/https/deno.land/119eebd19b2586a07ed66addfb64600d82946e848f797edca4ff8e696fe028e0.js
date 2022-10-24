import { renderEjs } from "./engines/ejs.ts";
import { renderHandlebars } from "./engines/handlebars.ts";
class EngineFactory {
    constructor() { }
    getEjsEngine() {
        return renderEjs;
    }
    getHandlebarsEngine() {
        return renderHandlebars;
    }
}
export const engineFactory = new EngineFactory();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZ2luZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTNELE1BQU0sYUFBYTtJQUNqQixnQkFBZSxDQUFDO0lBTWhCLFlBQVk7UUFDVixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztDQUVGO0FBRUQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMifQ==