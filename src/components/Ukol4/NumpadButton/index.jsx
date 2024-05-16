import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {
  return (
    <button onClick={() => onDigitClick(digit)} className="numpad-button">{digit}</button>
  );
};
