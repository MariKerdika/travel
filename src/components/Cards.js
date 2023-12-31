import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div class="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="images/2.jpg"
              text="Explore the hidden waterfalls deep inside  the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Travel through the island of Bali "
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="images/img-3.jpg"
              text="Explore the hidden waterfalls deep inside  the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Travel through the island of Bali "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfalls deep inside  the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/1.jpg"
              text="Travel through the island of Bali "
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
