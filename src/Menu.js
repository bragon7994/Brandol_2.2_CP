import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>Menu</h2>
        <ul>
          <li>
            <img src={require('./chinese.jpeg')} alt="chinese" height="20%" width="20%" />
            <p>Chinese</p>
            <p>Fu Jian Chinese</p>
            <p>Tuckahoe, Richmond</p>
            <p>Opens at 12 noon</p>
            <button><a href="/orders.html">Order Now</a></button>
          </li>

          <li>
            <img src={require('./pizza.jpg')} alt="Italianfood" height="20%" width="20%" />
            <p>Italian Pizza</p>
            <p>Chianti</p>
            <p>Tuckahoe, Richmond</p>
            <p>Opens at 12 am</p>
            <button><a href="/orders.html">Order Now</a></button>
          </li>

          <li>
            <img src={require('./mexicanfood.jpg')} alt="mexican" height="20%" width="20%" />
            <p>Mexican Food</p>
            <p>Mexico Restaurant</p>
            <p>Tuckahoe, Richmond</p>
            <p>Opens at 11 am</p>
            <button><a href="/orders.html">Order Now</a></button>
          </li>

          <li>
            <img src={require('./hamburger.jpg')} alt="hamburger" height="20%" width="20%" />
            <p>Wendys</p>
            <p>Hamburger</p>
            <p>Tuckahoe, Richmond</p>
            <p>Opens at 10 am</p>
            <button><a href="/orders.html">Order Now</a></button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
