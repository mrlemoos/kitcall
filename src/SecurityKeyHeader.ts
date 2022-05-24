type SecurityKeyHeader =
  | "Cross-Origin-Embedder-Policy"
  | "Cross-Origin-Opener-Policy"
  | "Cross-Origin-Resource-Policy"
  | "Cross-Security-Policy"
  | "Cross-Security-Policy-Report-Only"
  | "Except-CT"
  | "Feature-Policy"
  | "Origin-Isolation"
  | "Strict-Transport-Security"
  | "Upgrade-Insecure-Requests"
  | "X-Content-Type-Options"
  | "X-Download-Options"
  | "X-Frame-Options"
  | "X-Permitted-Cross-Domain-Policies"
  | "X-Powered-By"
  | "X-XSS-Protection";

export default SecurityKeyHeader;
