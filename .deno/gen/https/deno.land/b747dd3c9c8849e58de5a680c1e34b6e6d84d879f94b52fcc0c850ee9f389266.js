import { copyBytes } from "./deps.ts";
export class AsyncIterableReader {
    constructor(asyncIterable, processValue) {
        this.#closed = false;
        this.#close = () => {
            if (this.#asyncIterator.return) {
                this.#asyncIterator.return();
            }
            this.#asyncIterator = undefined;
            this.#closed = true;
        };
        this.#asyncIterator = asyncIterable[Symbol.asyncIterator]();
        this.#processValue = processValue;
    }
    #asyncIterator;
    #closed;
    #current;
    #processValue;
    #close;
    async read(p) {
        if (this.#closed) {
            return null;
        }
        if (p.byteLength === 0) {
            this.#close();
            return 0;
        }
        if (!this.#current) {
            const { value, done } = await this.#asyncIterator.next();
            if (done) {
                this.#close();
            }
            if (value !== undefined) {
                this.#current = this.#processValue(value);
            }
        }
        if (!this.#current) {
            if (!this.#closed) {
                this.#close();
            }
            return null;
        }
        const len = copyBytes(this.#current, p);
        if (len >= this.#current.byteLength) {
            this.#current = undefined;
        }
        else {
            this.#current = this.#current.slice(len);
        }
        return len;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfaXRlcmFibGVfcmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXN5bmNfaXRlcmFibGVfcmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdEMsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixZQUNFLGFBQStCLEVBQy9CLFlBQXNDO1FBTnhDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFZaEIsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDOUI7WUFFQSxJQUFZLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUM7UUFYQSxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBWEQsY0FBYyxDQUFtQjtJQUNqQyxPQUFPLENBQVM7SUFDaEIsUUFBUSxDQUF5QjtJQUNqQyxhQUFhLENBQTJCO0lBVXhDLE1BQU0sQ0FPSjtJQUVGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGIn0=