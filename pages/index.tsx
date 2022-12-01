import React from "react";
import { HeroBanner, FooterBanner, Product } from "../components";

const Home = () => {

  return (
    <div className="products">
      <HeroBanner/>
      
      <div className="products__heading">
        <h2>Best Selling Products</h2>
        <p>Only you and your music</p>
      </div>
      <div className="products__container">
        {['product 1', 'product 2'].map((product) => product)}
      </div>

      <FooterBanner/>
    </div>
  )}

export default Home;