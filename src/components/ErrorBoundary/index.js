import { ErrorBoundary } from 'react-error-boundary';

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    console.error('resetErrorBoundary:', resetErrorBoundary)
    console.error('error:', error)
    return (
        <div role="alert" className='flex flex_dcolumn'>
            <p className='text_center'>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export const ErrorBoundaries = ({ children }) => {
    const myErrorHandler = (error, info) => {
        console.error('componentStack:', info);
        console.error('error:', error)
    }
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
            {children}
        </ErrorBoundary>
    )
}