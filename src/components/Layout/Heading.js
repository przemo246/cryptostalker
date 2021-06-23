export const Heading = () => {
  return (
    <div className="heading-container">
      <h1 className="heading-primary">
        <span id="greet"></span>
        <span className="green-highlight">Anonymous!</span>
      </h1>
      <span className="greeting-subtitle">
        this is a greeting in <span id="lang"></span> 😉
      </span>
    </div>
  );
};
