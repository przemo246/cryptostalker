export default function ButtonGreen({ handleOnClick, text }) {
  return (
    <button className="btn btn-green" type="submit" onClick={handleOnClick}>
      {text}
    </button>
  );
}
