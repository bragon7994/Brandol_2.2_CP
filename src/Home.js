import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello, Welcome to Zomato!</h2>
        <p>Zomato is a popular food delivery and restaurant discovery 
          app that helps users find and order food from nearby restaurants.
           The app provides a comprehensive database of restaurants, cafes, 
           bars, and other food establishments, along with menus, ratings, 
           reviews, and photos.</p>
        <p>Users can search for food based on location, cuisine, rating, 
          and price range, and the app provides recommendations based on 
          user preferences and previous orders. Zomato also offers a food 
          delivery service, allowing users to order food from their favorite
           restaurants and track their delivery in real-time.</p>
         
        <div><h3>If you would like to see more, click <Link to="https://www.zomato.com/who-we-are">Here</Link></h3>  
        </div>

      </div>
    );
  }
}
 
export default Home;