import React, { useState } from "react";

export const Textarea = (props) => {
  const [text, setText] = useState("");

  const toUpper = () => {
    const upText = text.toUpperCase();
    props.showAlert("Converted To Uppercase", "success");

    setText(upText);
    props.removeAlert();
  };

  const toLower = () => {
    const lowerText = text.toLowerCase();

    setText(lowerText);
    props.showAlert("Converted To Lowercase", "success");

    props.removeAlert();
  };

  const extraSpace = () => {
    const removeSpace = text.split(/[  ]+/);
    setText(removeSpace.join(" "));

    props.showAlert("Extra space has been removed", "success");

    props.removeAlert();
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  const textTrim = text.trim();
  const word = textTrim.split(" ");

  const filterWord = word.filter((element) => {
    return element !== "";
  });

  const copyText = () => {
    const copy = document.getElementById("Textarea");
    copy.select();

    navigator.clipboard.writeText(copy.value);
    props.showAlert("coppid clipboard", "success");

    props.removeAlert();
  };

  return (
    <>
      <div
        className="mb-3 container  my-3"
        style={{ color: props.darkMode === "light" ? "#000" : "#00ffff" }}
      >
        <h2>{props.title}</h2>
        <textarea
          className="form-control  my-3"
          id="Textarea"
          rows="8"
          placeholder="Enter The Text Here"
          value={text}
          onChange={textChange}
        ></textarea>

        <button
          type="button"
          className="btn btn-primary my-1"
          onClick={toUpper}
        >
          TO UPPERCASE
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={toLower}
        >
          to lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary my-1"
          onClick={copyText}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={extraSpace}
        >
          Remove Extra Space
        </button>

        <div className="my-3">
          <h2>Your Text Summary</h2>
          <p>
            Charecters : {text.length} , Words : {filterWord.length}
          </p>
          <h3>Priview Text</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
