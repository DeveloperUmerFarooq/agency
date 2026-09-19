import { Component } from 'react'

export class AppErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Application render failed', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <p className="eyebrow">Something went wrong</p>
          <h1>We could not load this page.</h1>
          <button className="button primary" type="button" onClick={() => window.location.reload()}>
            Try again
          </button>
        </main>
      )
    }

    return this.props.children
  }
}
