import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function Logo() {
  return (
    <h1>
      Todo List <FontAwesomeIcon icon={faListCheck} />
    </h1>
  );
}

export default Logo;
