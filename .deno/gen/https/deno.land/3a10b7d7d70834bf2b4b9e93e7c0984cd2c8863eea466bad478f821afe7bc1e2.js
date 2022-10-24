export function viewEngine(adapter, engine, config = {}) {
    try {
        if (config.useCache) {
            config.cache = new Map();
        }
        return adapter(engine, config);
    }
    catch (e) {
        throw new Error("View-Engine: Wrong Engine or View type");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXdFbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsT0FBZ0IsRUFDaEIsTUFBYyxFQUNkLFNBQWtDLEVBQUU7SUFFcEMsSUFBSTtRQUNGLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1NBQzFDO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7S0FDM0Q7QUFDSCxDQUFDIn0=