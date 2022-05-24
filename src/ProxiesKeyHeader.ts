type ProxiesKeyHeader =
  | "Forwarded"
  | "X-Forwarded-For"
  | "X-Forwarded-Host"
  | "X-Forwarded-Proto"
  | "Via";

export default ProxiesKeyHeader;
