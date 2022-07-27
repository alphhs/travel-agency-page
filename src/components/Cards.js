import CardItem from "./CardItem";
import React from "react";
import "./Cards.css";
import { images } from "./images";
function Cards() {
  return (
    <div className="cards">
      <h1>{`Check out these epic destinations`.toUpperCase()}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={images.img9}
              text="Explore the hidden waterfall inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={images.img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images.img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={images.img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={images.img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
