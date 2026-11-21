function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error">
      <p>Oops! {message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default ErrorMessage;