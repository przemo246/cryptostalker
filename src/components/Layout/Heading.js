import { useState, useEffect } from "react";
import { useUser } from "../../hooks/useUser";

export const Heading = () => {
  const user = useUser();
  const [greeting, setGreeting] = useState({ greet: "", lang: "" });
  useEffect(() => {
    const greetings = [
      { greet: "Salut", lang: "French" },
      { greet: "Hola", lang: "Spanish" },
      { greet: "Cześć", lang: "Polish" },
      { greet: "Hallo", lang: "German" },
      { greet: "Hej", lang: "Swedish" },
      { greet: "Hi", lang: "English" },
      { greet: "Ciao", lang: "Italian" },
    ];
    const randomNumber = Math.round(Math.random() * greetings.length - 1);
    setGreeting(greetings[randomNumber]);
  }, []);
  return (
    <div className="heading-container">
      <h1 className="heading-primary">
        <span id="greet">{greeting.greet} </span>
        <span className="green-highlight">
          {user?.displayName || "Anonymous"}
        </span>
      </h1>
      <span className="greeting-subtitle">
        This is a greeting in <span id="lang">{greeting.lang}</span> 😉
      </span>
    </div>
  );
};
