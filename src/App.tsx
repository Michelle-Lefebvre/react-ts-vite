import React, { useState } from "react";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { FaBeer } from "react-icons/fa";
import Like from "./components/Like";

function App() {
  let items = ["New York", "Toronto", "Seattle", "Vancouver", "Montreal"];
  let clicked = 0;
  const [isApproved, setApproved] = useState(true);

  const handleSelectItem = (item: string) => {
    clicked++;
    console.log(item);
  };

  return (
    <div className="App">
      <Message msg="first" />
      <Message msg="super fly" />
      <Message msg="startrek" />
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
      <Alert children="Hello World" />
      <FaBeer color="blue" size={80} />
      <Like onClick={() => console.log("clicked")} />
      <span>{clicked}</span>
    </div>
  );
}

export default App;
