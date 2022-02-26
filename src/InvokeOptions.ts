import type CallOptions from "./CallOptions";

type OmittedCallOptions = Omit<CallOptions, "baseURL">;
interface InvokeOptions<BodyToSend> extends OmittedCallOptions {
  headers?: { [key: string]: string };
  body?: BodyToSend;
  mode?: RequestMode;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  integrity?: string;
  keepalive?: boolean;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  signal?: AbortSignal;
}

export default InvokeOptions;
