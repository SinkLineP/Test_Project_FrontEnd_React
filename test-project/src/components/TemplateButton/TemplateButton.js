import React from "react";
import { Button } from "react-bootstrap";

export function TemplateButton(props) {
  const { styleBtn, content, func, valueBtn } = props;

  return(
    <>
      <Button variant={styleBtn} onClick={func} value={valueBtn}>{content}</Button>

    </>
  )
};