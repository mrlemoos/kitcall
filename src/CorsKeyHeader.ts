type CorsKeyHeader =
  | "Access-Control-Allow-Origin"
  | "Access-Control-Allow-Credentials"
  | "Access-Control-Allow-Headers"
  | "Access-Control-Allow-Methods"
  | "Access-Control-Expose-Headers"
  | "Accept-Control-Max-Age"
  | "Accept-Control-Request-Headers"
  | "Accept-Control-Request-Method"
  | "Origin"
  | "Timing-Allow-Origin";

export default CorsKeyHeader;
