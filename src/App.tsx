import React, { Component, useState } from "react";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { FaBeer } from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  let items = ["New York", "Toronto", "Seattle", "Vancouver", "Montreal"];
  let clicked = 0;
  const [isApproved, setApproved] = useState(true);
  const handleSelectItem = (item: string) => {
    clicked++;
    // console.log(item);
  };
  // updating state in object w/ array
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Item 1", quantity: 1 },
      { id: 2, title: "Item 2", quantity: 1 },
    ],
  });

  const handleCartChange = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity++ } : item
      ),
    });
    // console.log("cart", cart);
    return `<h1>${cart}</h1>`;
  };

  // exercise Updating state in array
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  });
  // console.log("pizza1", pizza);

  const handlePizzaChange = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "pepperoni"] });
  };
  // console.log("pizza2", pizza);

  // exercise Updating State
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 5,
    },
  });
  // console.log("game1", game);

  const handleGameClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Michelle" } });
    // console.log("game2");
    return `<h1>${game}</h1>`;
  };

  // updating state between Components
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

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
      <Form />
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
            <AiFillBug size={36} />
          </li>
        </ul>
      ))}
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />

      <button onClick={handleGameClick}>Player Change</button>
      <button onClick={handlePizzaChange}>Pizza</button>
      <button onClick={handleCartChange}>Cart</button>

      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        veritatis necessitatibus in ipsum fugit, repudiandae beatae nostrum
        quasi deleniti ipsam blanditiis magnam earum ad accusamus voluptatum
        numquam eaque quas. Accusantium.
      </ExpandableText>
    </div>
  );
}

export default App;
