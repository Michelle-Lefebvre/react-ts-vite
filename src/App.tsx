import React, { useState } from "react";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { FaBeer } from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";
import Like from "./components/Like";

function App() {
  let items = ["New York", "Toronto", "Seattle", "Vancouver", "Montreal"];
  let clicked = 0;
  const [isApproved, setApproved] = useState(true);
  const handleSelectItem = (item: string) => {
    clicked++;
    console.log(item);
  };

  //object updating
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleDrinkClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  // updating array
  const [tags, setTags] = useState(["happy", "cheerfull"]);

  const handleArrayClick = () => {
    // add new item
    setTags([...tags, "exciting"]);
    // remove
    setTags(tags.filter((tag) => tag !== "happy"));
    // update
    setTags(tags.map((tag) => (tag === "happy" ? "hapiness" : tag)));
  };

  // updating Array of Object
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div className="App">
      <Message msg="first" />
      {/* <Message msg="super fly" />
      <Message msg="startrek" /> */}
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
      <Alert children="Hello World" />
      <FaBeer onClick={handleDrinkClick} color="brown" size={80} />
      <span>${drink.price}</span>
      <Like onClick={() => console.log("clicked")} />
      {bugs.map((bug) => (
        <ul>
          <li onClick={handleBugClick} key={bug.id}>
            {bug.id}
            <AiFillBug />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
