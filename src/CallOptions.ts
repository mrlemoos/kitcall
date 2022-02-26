interface CallOptions {
  onCatch?: (error: Error) => void;
  onFinally?: () => void;
  onSuccess?: (result: unknown) => void;
  baseURL?: string;
}

export default CallOptions;
