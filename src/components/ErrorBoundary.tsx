import React from 'react';

interface Error {
  error: boolean;
}

interface Props {
  children: JSX.Element;
}

export class ErrorBoundary extends React.Component<Props, Error> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false };
  }

  handleRefresh = () => {
    window.location.reload();
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="error">
          <h2>Something went wrong.</h2>
          <button
            className="refresh-button"
            type="submit"
            onClick={this.handleRefresh}
          >
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
