declare global {
  interface NodeModule {
    hot?: {
      accept: () => void;
    };
  }
}

export {};
