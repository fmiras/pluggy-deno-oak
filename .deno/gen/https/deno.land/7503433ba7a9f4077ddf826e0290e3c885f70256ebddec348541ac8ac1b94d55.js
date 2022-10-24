import { RequestBody } from "./body.ts";
import { preferredCharsets } from "./negotiation/charset.ts";
import { preferredEncodings } from "./negotiation/encoding.ts";
import { preferredLanguages } from "./negotiation/language.ts";
import { preferredMediaTypes } from "./negotiation/mediaType.ts";
const decoder = new TextDecoder();
export class Request {
    constructor(serverRequest, proxy = false, secure = false) {
        this.#proxy = proxy;
        this.#secure = secure;
        this.#serverRequest = serverRequest;
        this.#body = new RequestBody(serverRequest);
    }
    #body;
    #proxy;
    #secure;
    #serverRequest;
    #url;
    get hasBody() {
        return this.#body.has();
    }
    get headers() {
        return this.#serverRequest.headers;
    }
    get ip() {
        return this.#proxy
            ? this.ips[0]
            : this.#serverRequest.conn.remoteAddr.hostname;
    }
    get ips() {
        return this.#proxy
            ? (this.#serverRequest.headers.get("x-forwarded-for") ??
                this.#serverRequest.conn.remoteAddr.hostname).split(/\s*,\s*/)
            : [];
    }
    get method() {
        return this.#serverRequest.method;
    }
    get secure() {
        return this.#secure;
    }
    get serverRequest() {
        return this.#serverRequest;
    }
    get url() {
        if (!this.#url) {
            const serverRequest = this.#serverRequest;
            let proto;
            let host;
            if (this.#proxy) {
                proto = serverRequest
                    .headers.get("x-forwarded-proto")?.split(/\s*,\s*/, 1)[0] ??
                    "http";
                host = serverRequest.headers.get("x-forwarded-host") ??
                    serverRequest.headers.get("host") ?? "";
            }
            else {
                proto = this.#secure ? "https" : "http";
                host = serverRequest.headers.get("host") ?? "";
            }
            try {
                this.#url = new URL(`${proto}://${host}${serverRequest.url}`);
            }
            catch {
                throw new TypeError(`The server request URL of "${proto}://${host}${serverRequest.url}" is invalid.`);
            }
        }
        return this.#url;
    }
    accepts(...types) {
        const acceptValue = this.#serverRequest.headers.get("Accept");
        if (!acceptValue) {
            return;
        }
        if (types.length) {
            return preferredMediaTypes(acceptValue, types)[0];
        }
        return preferredMediaTypes(acceptValue);
    }
    acceptsCharsets(...charsets) {
        const acceptCharsetValue = this.#serverRequest.headers.get("Accept-Charset");
        if (!acceptCharsetValue) {
            return;
        }
        if (charsets.length) {
            return preferredCharsets(acceptCharsetValue, charsets)[0];
        }
        return preferredCharsets(acceptCharsetValue);
    }
    acceptsEncodings(...encodings) {
        const acceptEncodingValue = this.#serverRequest.headers.get("Accept-Encoding");
        if (!acceptEncodingValue) {
            return;
        }
        if (encodings.length) {
            return preferredEncodings(acceptEncodingValue, encodings)[0];
        }
        return preferredEncodings(acceptEncodingValue);
    }
    acceptsLanguages(...langs) {
        const acceptLanguageValue = this.#serverRequest.headers.get("Accept-Language");
        if (!acceptLanguageValue) {
            return;
        }
        if (langs.length) {
            return preferredLanguages(acceptLanguageValue, langs)[0];
        }
        return preferredLanguages(acceptLanguageValue);
    }
    body(options = {}) {
        return this.#body.get(options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBR2xDLE1BQU0sT0FBTyxPQUFPO0lBbUZsQixZQUFZLGFBQTRCLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUF2RkQsS0FBSyxDQUFjO0lBQ25CLE1BQU0sQ0FBVTtJQUNoQixPQUFPLENBQVU7SUFDakIsY0FBYyxDQUFnQjtJQUM5QixJQUFJLENBQU87SUFHWCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDckMsQ0FBQztJQUtELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFH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