import { single } from "./single";

type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
type Options = Omit<RequestInit, "method" | "body">;
type ActionParams = Options & { method: Method; body?: RequestInit["body"] };
type InterceptorHandler<T extends Request | Response> = (param: T) => T;

class Fetcher {
  private requestInterceptors: InterceptorHandler<Request>[] = [];
  private responseInterceptors: InterceptorHandler<Response>[] = [];
  private baseUrl: string = "";

  constructor(options?: { baseUrl?: string }) {
    const { baseUrl } = options ?? {};

    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  addRequestInterceptor(handler: InterceptorHandler<Request>) {
    this.requestInterceptors.push(handler);
  }

  addResponseInterceptor(handler: InterceptorHandler<Response>) {
    this.responseInterceptors.push(handler);
  }

  get<T>(url: string, options?: Options) {
    this.action<T>(url, {
      method: "GET",
      ...options,
    });
  }

  post<T>(url: string, data: unknown, options?: Options) {
    return this.action<T>(url, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    });
  }

  patch<T>(url: string, data: unknown, options?: Options) {
    return this.action<T>(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      ...options,
    });
  }

  put<T>(url: string, data: unknown, options?: Options) {
    return this.action<T>(url, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options,
    });
  }

  delete<T>(url: string, options?: Options) {
    return this.action<T>(url, {
      method: "DELETE",
      ...options,
    });
  }

  private async action<T>(url: string, params: ActionParams): Promise<T> {
    const normalizedUrl = this.normalizeUrl(`${this.baseUrl}${url}`);
    const request = this.requestHandler(new Request(normalizedUrl, params));
    const response = this.responseHandler(await fetch(request));

    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("text/")) {
      return (await response.text()) as T;
    } else if (
      contentType?.includes("image/") ||
      contentType?.includes("audio/") ||
      contentType?.includes("video/") ||
      contentType === "application/octet-stream"
    ) {
      return (await response.blob()) as T;
    } else {
      return await response.json();
    }
  }

  private requestHandler(request: Request) {
    return this.requestInterceptors.reduce((prev, listener) => {
      return listener(prev);
    }, new Request(request));
  }

  private responseHandler(response: Response) {
    return this.responseInterceptors.reduce((prev, listener) => {
      return listener(prev);
    }, new Response(response.body, response));
  }

  private normalizeUrl(url: string) {
    const result = url.trim();

    if (result.startsWith("http") || result.startsWith("https")) {
      return result;
    }

    if (result[0] !== "/") {
      return "/" + result;
    }

    return result;
  }
}

export const fetcher = single(new Fetcher());
