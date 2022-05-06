import React from "react";
import "./TemplateButton.css";

export function TemplateButton(props) {
  const { content, func, valueBtn } = props;

  return(
    <>
      <button className={"btn-custom"} onClick={func} value={valueBtn}>{content}</button>
    </>
  )
};