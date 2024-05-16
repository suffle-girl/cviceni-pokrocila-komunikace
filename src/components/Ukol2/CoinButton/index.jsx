import './style.css';

export const CoinButton = ({ value, onCoinClick }) => {
  return (
    <button onClick={() => onCoinClick(value)} className="icon-button">
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
