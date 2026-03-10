import React from "react";
import { Link } from "react-router-dom";
// InfoCard Component
// Body Component
function Body() {
  return (
    <>
      <main>
        <section className="content">
          <div className="text-content">
            <h6>____ FRESH & DELICIOUS</h6>
            <h3>
              <span>Delicious</span> Meal <br /> and <span>tradition </span>
            </h3>
            <p>
              Enjoy fresh, flavorful meals made with the
              finest ingredients.
            </p>
            <br />
            <Link to="/food">
            <button className="btn">Order Now</button>
            </Link>
          </div>
          <div className="image-content">
            <img src="Images/african-food.jpg" className="hero-image" />
          </div>
        </section>

        <section className="second-content">
          <div className="second-text">
            <h3>
              Explore <span>Our</span> Menu
            </h3>
            <p>Try our menu, crafted with fresh irresistible flavors</p>
          </div>
          <div className="second-button">
            <Link to="/food">
              <button className="btn view-btn">View All &#8594;</button>
            </Link>
          </div>
        </section>

        <section className="popular-section">
          <h2 className="section-title"></h2>

          <div className="category-grid">
            {categories.map((item, index) => (
              <div className="category-card" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.tags}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

const categories = [
  {
    image: "/Images/ice-cocktail.jpg",
    title: "Refreshing Beverages & Mocktails",
    tags: "Breakfast, Dinner, Favorites, Quick Snacks",
  },
  {
    image: "/Images/chickenmeal.jpg",
    title: "Desserts That Melt Hearts",
    tags: "Breakfast, Dinner, Favorites, Quick Snacks",
  },
  {
    image: "/Images/delicious-lobster.jpg",
    title: "Seafood Specials",
    tags: "Breakfast, Dinner, Favorites, Quick Snacks",
  },
];

export default Body;
