import './style.css';

export const FunctionButton = ({ label, onFunctionClick }) => {
  return (
    <button onClick={() => onFunctionClick()} className="numpad-button">{label}</button>
  );
};
