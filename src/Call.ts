import type CallOptions from "./CallOptions";
import type Endpoint from "./Endpoint";
import type InvokeOptions from "./InvokeOptions";
import defaultCallOptions from "./DefaultCallOptions";

function call({
  baseURL,
  onCatch,
  onFinally,
  onSuccess,
}: CallOptions = defaultCallOptions) {
  return async function _invoke<BodyToSend = never, BodyExpected = never>(
    endpoint: Endpoint,
    {
      headers,
      body,
      onCatch: onInvokeCatch,
      onFinally: onInvokeFinally,
      onSuccess: onInvokeSuccess,
      mode,
      cache,
      credentials,
      integrity,
      keepalive,
      redirect,
      referrer,
      referrerPolicy,
      signal,
    }: InvokeOptions<BodyToSend> = {}
  ): Promise<BodyExpected> {
    if (!endpoint) {
      throw new Error(
        "Where you call? I think you forgot to pass an endpoint \\_(-_-)_/."
      );
    }

    const trimmedEndpoint = endpoint.trim();
    const [sensitiveCaseMethod, sensitiveURI] = trimmedEndpoint.split(" ");

    const method = sensitiveCaseMethod.trim().toUpperCase();
    const uri = sensitiveURI.trim().toLowerCase();

    if (!method) {
      throw new Error(
        "Where you call? I think you forgot to pass a method. \n" +
          `You should give us a method like this: call()('GET /users') so we can get your data : ) (if it helps, we’ve got ${method})`
      );
    }

    const methods = [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "HEAD",
      "OPTIONS",
    ];

    if (!methods.includes(method)) {
      throw new Error(
        `I can be wrong, but I think there’s no HTTP method called '${method}'`
      );
    }

    if (!uri) {
      throw new Error(
        "Where you call? I think you forgot to pass a URI. \n" +
          `You should give us a URI like this: call()('GET /users') so we can get your data : ) (if it helps, we’ve got ${uri})`
      );
    }

    if (
      !(
        uri.startsWith("http://") ||
        uri.startsWith("https://") ||
        uri.startsWith("/")
      )
    ) {
      throw new Error(
        'I can be wrong, but I think you forgot to add "http://" or "https://" at the beginning of your URI. \\_(-_-)_/ We don’t have it automatically because we’re not sure which of them you wanna use as prefix. \n'
      );
    }

    if (uri.startsWith("/") && typeof baseURL !== "string") {
      throw new Error(
        "You have to give us a baseURL if you want to use a relative URI. Or you meant to use octokit, not sure yet :/\n"
      );
    }

    try {
      const raw = await fetch(uri, {
        headers,
        method,
        body: typeof body === "object" ? JSON.stringify(body) : undefined,
        mode,
        cache,
        credentials,
        integrity,
        keepalive,
        redirect,
        referrer,
        referrerPolicy,
        signal,
      });
      const res = ((await raw.json()) || {}) as BodyExpected;

      const _onSuccess = onSuccess || onInvokeSuccess;

      if (typeof _onSuccess === "function") {
        _onSuccess(res);
      }

      return res;
    } catch (err) {
      const _onCatch = onCatch || onInvokeCatch;

      if (typeof _onCatch === "function") {
        _onCatch(err as Error);
      }
      return err as BodyExpected;
    } finally {
      const _onFinally = onFinally || onInvokeFinally;

      if (typeof _onFinally === "function") {
        _onFinally();
      }
      return {} as BodyExpected;
    }
  };
}

export default call;
