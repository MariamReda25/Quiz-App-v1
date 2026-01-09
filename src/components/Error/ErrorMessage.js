import "./ErrorMessage.css";
function ErrorMessage({ message }) {
  return (
    <div className="error">
      <p>⛔Error: {message}</p>
    </div>
  );
}

export default ErrorMessage;
