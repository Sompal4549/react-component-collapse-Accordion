import React, { useState, useRef } from "react";
// import "./Accordion.css";
import Chevron from "./Chevron";
const Accordion = (props) => {
  const [rotate, setRotate] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);
  function toggleAccordion(props) {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(setActive === "active" ? true : false);
    console.log(content.current.scrollHeight);
  }
  return (
    <div className="accordion_section">
      <button
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          fontSize: "20px",
        }}
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="accordion_title">{props.title}</p>
        <Chevron
          style={{ transform: rotate ? "rotate(90deg)" : "" }}
          className={`${rotate}`}
          width={10}
          fill="#777"
        />
      </button>
      <div
        ref={content}
        style={{
          maxHeight: `${setHeight}`,
          overflow: "hidden",
          background: "lightyellow",
          fontSize: "20px",
        }}
        className="accordion_content"
      >
        <div
          style={{ padding: "15px 10px" }}
          className="accordion_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;
