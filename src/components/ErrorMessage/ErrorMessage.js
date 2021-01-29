import './ErrorMessage.css';

const ErrorMessage = ({ visible, error }) => {
  return (
    <div className="error-message">
      {visible && <p>{error}</p>}
    </div>
  )
}

export default ErrorMessage
