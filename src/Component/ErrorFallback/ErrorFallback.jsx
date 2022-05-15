import "../../App.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error__boundary__wrapper">
      <h1>Something went wrong:</h1>
      <pre>{error.message}</pre>
      <button className="btn__err" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

export { ErrorFallback };
