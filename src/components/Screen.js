const Screen = ({ text, hidden }) => {
  let i = 0;

  return (
    <div>
      <div className="panel">
        {hidden && Array.from(text).map((c) => <span key={i++}>*</span>)}
        {!hidden && Array.from(text).map((c) => <span key={i++}>{c}</span>)}
      </div>
    </div>
  );
};

export default Screen;
