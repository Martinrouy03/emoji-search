const Line = ({ title, symbol }) => {
  return (
    <div className="emoji-container">
      <span>${symbol}</span>
      <br />
      <p>${title}</p>
    </div>
  );
};

export default Line;
