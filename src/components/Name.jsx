import { useState, useEffect } from "react";

function Name() {
  const developer = ["Front End Developer", "React.js Developer"];
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!deleting) {
        if (text.length < developer[word].length) {
          setText((prev) => prev + developer[word][text.length]);
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setDeleting(false);
          if (word < developer.length - 1) {
            setWord((prev) => prev + 1);
          } else {
            setWord(0);
          }
        }
      }
    }, 200);

    return () => clearInterval(timer);
  }, [text, deleting, word]);

  return (
    <div className="name-container">
      <h2 className="namaste sec">Namaste 🙏!!! I'm</h2>
      <h1 className="name sec">Prateek Verma</h1>
      <h2 className="skills-container sec">
        And I'm a <span className="skills">{text}</span>
      </h2>

      <div>
        <button className="btns">Need a website?</button>
        <button className="btns hire-btn">Looking to hire?</button>
      </div>
    </div>
  );
}

export default Name;
