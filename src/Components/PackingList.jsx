import React from "react";
import Item from "./Items";

function PackingList({ items, onDeleteItem, onToggleItem, ClearItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      {items.length === 0 ? (
        ""
      ) : (
        <button className="clear-btn" onClick={ClearItems}>
          Clear list
        </button>
      )}
    </div>
  );
}

export default PackingList;
