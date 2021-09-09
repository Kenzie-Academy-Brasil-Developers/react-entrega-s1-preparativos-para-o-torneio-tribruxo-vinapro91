const Button = ({ btnText, handClick }) => {
  return (
    <>
      <button className="myButton" onClick={handClick}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
