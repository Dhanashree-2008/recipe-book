import React from "react";
import "./HomePage.css";
import hello from "../Images/hello.jpg";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CookBook</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Recipes</li>
        </ul>
        <button className="btn-orange">Login</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Left Side */}
        <div className="hero-text">
          <h1>
            Spice Up Your Life:{" "}
            <span className="highlight">Authentic Indian Recipes</span>
          </h1>
          <p>
            Discover handpicked recipes, plan your meals, and enjoy Indian
            flavors like never before. From street food to royal thalis – all in
            one place.
          </p>

          <div className="button-group">
            <button className="btn-black">🍴 Explore Recipes</button>
          </div>
        </div>

        {/* Right Side (AI-style Hero Image) */}
        <div className="hero-image">
          <img
            src={hello}
            alt="AI Styled Indian Food"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>you were wondering something</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1606756790138-9b9efb7b6a2f"
              alt="Variety of Dishes"
            />
            <h3>1000+ Recipes</h3>
            <p>From snacks to desserts – explore authentic Indian dishes.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1625941361924-76f1c79f6d89"
              alt="Meal Planning"
            />
            <h3>Meal Planner</h3>
            <p>Plan your meals and track nutrition effortlessly.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1625246160128-0690f9b867b1"
              alt="Healthy Eating"
            />
            <h3>Healthy Choices</h3>
            <p>Cook smart with balanced and nutritious recipes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
