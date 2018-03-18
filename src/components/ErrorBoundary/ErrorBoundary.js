import React from 'react';

// import { reportRenderError } from '../../services/errorReporting.js';

export class ErrorBoundary extends React.PureComponent {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
    });
    // reportRenderError(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
