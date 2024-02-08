import { useEffect, useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0) return;
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    setItems(items || []);
  }, []);

  function handelNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    const clearConfirmation = window.confirm(
      "All your items will be deleted!!"
    );
    if (clearConfirmation) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleRemoveItem}
        onToggleItem={handelToggleItem}
        ClearItems={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
