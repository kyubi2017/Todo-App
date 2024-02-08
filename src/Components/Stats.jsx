import React from "react";

function Stats({ items }) {
  const itemNumber = items.length;
  const packedItemsNum = items.filter((item) => item.packed).length;
  const packedItemPercentage = Math.round((packedItemsNum / itemNumber) * 100);
  return !items.length ? (
    <p className="stats">
      <em>Start adding items you wanna pack</em>
    </p>
  ) : (
    <footer className="stats">
      <em>
        {packedItemPercentage === 100
          ? "You got everything packed to travel ✈️"
          : `you have ${itemNumber} items in your list , and you packed ${packedItemsNum}, ( ${
              packedItemsNum === 0 ? 0 : packedItemPercentage
            }% )`}
      </em>
    </footer>
  );
}

export default Stats