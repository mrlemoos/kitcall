import type HttpMethod from "./HttpMethod";
import type URLShape from "./URLShape";

type Endpoint = `${HttpMethod} ${URLShape}`;

export default Endpoint;
