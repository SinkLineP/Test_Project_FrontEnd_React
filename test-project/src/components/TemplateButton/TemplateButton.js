import React from "react";
import { Button } from "react-bootstrap";
import "./TemplateButton.css";

export function TemplateButton(props) {
  const { styleBtn, content, func, valueBtn } = props;

  return(
    <>
      <button className={"btn-custom"} onClick={func} value={valueBtn}>{content}</button>
    </>
  )
};