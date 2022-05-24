import type AuthorizationKey from "./AuthorizationKeyHeader";
import type CachingKeyHeader from "./CachingKeyHeader";
import type CookieKeyHeader from "./CookieKeyHeader";
import type CorsKeyHeader from "./CorsKeyHeader";
import type DeviceClientHintsKeyHeader from "./DeviceClientHintsKeyHeader";
import type DownloadsKeyHeader from "./DownloadsKeyHeader";
import type FetchMetadataRequestHeadersKeyHeader from "./FetchMetadataRequestHeadersKeyHeader";
import type HttpPublicKeyPinningKeyHeader from "./HttpPublicKeyPinningKeyHeader";
import type MessageBodyInformationKeyHeader from "./MessageBodyInformationKeyHeader";
import type NetworkClientHintsKeyHeader from "./NetworkClientHintsKeyHeader";
import type OtherPoliciesKeyHeader from "./OtherPoliciesKeyHeader";
import type ProxiesKeyHeader from "./ProxiesKeyHeader";
import type RedirectsKeyHeader from "./RedirectsKeyHeader";
import type RequestContextKeyHeader from "./RequestContextKeyHeader";
import type ResponseContextKeyHeader from "./ResponseContextKeyHeader";
import type SecurityKeyHeader from "./SecurityKeyHeader";
import type ServerSentEventsKeyHeader from "./ServerSentEventsKeyHeader";
import type TransferCodingKeyHeader from "./TransferCodingKeyHeader";
import type UserAgentClientHintsKeyHeader from "./UserAgentClientHintsKeyHeader";
import type WebSocketsKeyHeader from "./WebSocketsKeyHeader";

type KeyHeaders = AuthorizationKey &
  CachingKeyHeader &
  CookieKeyHeader &
  CorsKeyHeader &
  DeviceClientHintsKeyHeader &
  DownloadsKeyHeader &
  FetchMetadataRequestHeadersKeyHeader &
  HttpPublicKeyPinningKeyHeader &
  MessageBodyInformationKeyHeader &
  NetworkClientHintsKeyHeader &
  OtherPoliciesKeyHeader &
  ProxiesKeyHeader &
  RedirectsKeyHeader &
  RequestContextKeyHeader &
  ResponseContextKeyHeader &
  SecurityKeyHeader &
  ServerSentEventsKeyHeader &
  TransferCodingKeyHeader &
  UserAgentClientHintsKeyHeader &
  WebSocketsKeyHeader;

export default KeyHeaders;
