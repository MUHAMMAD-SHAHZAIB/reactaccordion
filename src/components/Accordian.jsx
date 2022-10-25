import React from "react";
import { questions } from "./api";
import "./accordian.css";
import { useState } from "react";
import MyAccordian from "./MyAccordian";


const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
    <section className="main-div">
      <h1>Recat Question</h1>
        {data.map((val) => {
            const {id}=val;
          return <MyAccordian  key={id} {...val}/>
        })}
    
      </section>
    </>
  );
};

export default Accordian;
