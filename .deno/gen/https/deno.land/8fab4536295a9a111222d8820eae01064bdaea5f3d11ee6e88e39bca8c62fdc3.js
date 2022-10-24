import { path } from "../../deps.ts";
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
export async function getTemplate(viewRoot, fileName) {
    let filePath = viewRoot + fileName;
    if (filePath.match(urlRegex)) {
        return await fetch(filePath).then((res) => res.text());
    }
    else {
        filePath = path.join(viewRoot, fileName);
        return Deno.readTextFileSync(filePath);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJDLE1BQU0sUUFBUSxHQUNkLHVHQUF1RyxDQUFDO0FBR3hHLE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVyxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7SUFDbEUsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUVuQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3hEO1NBQU07UUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDIn0=