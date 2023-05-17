import { Component, ErrorInfo, ReactNode } from 'react';

export type ErrorBoundaryError = Error;
export type ErrorBoundaryReset = () => void;

export interface ErrorBoundaryProps {
  deps?: unknown[];
  fallback:
    | ReactNode
    | ((
        reset: ErrorBoundaryReset,
        error?: ErrorBoundaryError,
        errorInfo?: ErrorInfo
      ) => JSX.Element);
  children: ReactNode;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: ErrorBoundaryError;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState | null {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error instanceof Error ? error : undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);

    this.setState({ error, errorInfo });
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.props.deps?.toString() !== prevProps.deps?.toString()) {
      this.reset();
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(
          this.reset,
          this.state.error,
          this.state.errorInfo
        );
      }

      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
