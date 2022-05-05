import React from "react";
import { Button } from "react-bootstrap";

export function TemplateButton(props) {
  const { styleBtn, content } = props;

  return(
    <>
      <Button variant={styleBtn}>{content}</Button>
    </>
  )
};