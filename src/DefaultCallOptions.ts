import type CallOptions from "./CallOptions";

const defaultCallOptions: CallOptions = {
  onCatch: (err) => {
    throw err;
  },
  onFinally: () => {},
  onSuccess: (result) => result,
};

export default defaultCallOptions;
