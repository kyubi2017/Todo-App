import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="item-quantity">{item.quantity}</span> : {item.description}
      </span>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <FontAwesomeIcon
        onClick={() => onDeleteItem(item.id)}
        icon={faTrash}
        style={{ color: "#3c0753", cursor: "pointer" }}
      />
    </li>
  );
}

export default Item;
