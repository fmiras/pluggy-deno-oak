import handlebars from "https://dev.jspm.io/handlebars@4.7.6";
export const hbs = handlebars;
export const renderHandlebars = (template, data = {}, config = {}, filename = "") => {
    return hbs.compile(template)(data);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlYmFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZWJhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sc0NBQXNDLENBQUM7QUFHOUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFTLFVBQVUsQ0FBQztBQUVwQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBVyxDQUN0QyxRQUFnQixFQUNoQixPQUFlLEVBQUUsRUFDakIsU0FBcUIsRUFBRSxFQUN2QixXQUFtQixFQUFFLEVBRWIsRUFBRTtJQUNWLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMifQ==