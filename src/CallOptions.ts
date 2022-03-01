interface CallOptions {
  onCatch?: (error: Error) => void;
  onSuccess?: (result: unknown) => void;
  baseURL?: string;
}

export default CallOptions;
