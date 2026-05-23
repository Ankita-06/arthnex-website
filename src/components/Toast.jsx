import './Toast.css';

const Toast = ({ message, visible, success }) => (
  <div className={`toast ${visible ? 'show' : ''}`} style={{ borderColor: success ? 'var(--accent)' : '#F87171' }}>
    <div className="toast-dot" style={{ background: success ? '#34D399' : '#F87171' }} />
    <span>{message}</span>
  </div>
);

export default Toast;
