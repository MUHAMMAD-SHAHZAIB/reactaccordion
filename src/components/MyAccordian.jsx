import React from "react";
import { useState } from "react";

const MyAccordian = props => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="main-heading">
        <p
          onClick={() => {
            setClick(!click);
          }}
        >
          {!click ? "➕" : "➖"}
        </p>
        <h3>{props.question}</h3>
      </div>
      {click && <p className="answers">{props.answer}</p>}
    </>
  );
};

export default MyAccordian;
