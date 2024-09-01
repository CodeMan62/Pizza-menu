import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    //<button
    //     onClick={() => {
    //       window.location.href = "/dashboard";
    //     }}
    //   >
    //     Dashboard
    //   </button>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/Order" element={<Order />} />
    //     </Routes>
    //   </BrowserRouter>
    <div className="Container">
      <Header />
      <Menu />
      <Footer />
      <Order />
    </div>
  );
}
function Header() {
  return (
    <header
      style={{ color: "red", fontSize: "5.2rem", textTransform: "uppercase" }}
      className="Header"
    >
      <h1>Fast React Pizza CO.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzanum = pizzas.length;
  return (
    <menu className="Menu">
      <h2>Our Menu</h2>

      {pizzanum > 0 ? (
        <>
          <p>
            Authentic Italian Cussin. 6 creative dishes to choose from our stone
            oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <h1>We are working on Menu</h1>
      )}
    </menu>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD-OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours;
  const openHour = 12;
  const closeHour = 22;
  const isopen = hours >= openHour && hours <= closeHour;
  console.log(isopen);

  return (
    <footer>
      {isopen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
function Order({ openHour, closeHour }) {
  // function orderhere() {
  //   window.location.href = "/Order";
  // }
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="Order-btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
