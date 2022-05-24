import type CallOptions from "./CallOptions";
import type KeyHeaders from "./KeyHeaders";

type OmittedCallOptions = Omit<CallOptions, "baseURL">;
interface InvokeOptions<BodyToSend = unknown> extends OmittedCallOptions {
  headers?: {
    [K in KeyHeaders]?: any;
  };
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
