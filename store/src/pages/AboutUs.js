import React from 'react';

function AboutUs() {
  return (
    <div className="container about-us">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="about-us__title">About Crafted</h1>
          <p className="about-us__text">
            Welcome to Crafted, your go-to destination for authentic, handmade treasures from the Philippines.
          </p>
          <p className="about-us__text">
            We celebrate the rich Philippine cultural heritage by showcasing the exceptional craftsmanship and creativity of local artisans. Our diverse collection features everything from timeless woven textiles to contemporary and stylish accessories.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://imgur.com/VKBv2ji.jpg"  className="img-fluid rounded-lg" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p className="about-us__text">
            Each piece in our store tells a story, reflecting the beauty and uniqueness of Filipino culture. By choosing Crafted, you're not just acquiring exquisite handmade items, but also empowering talented artisans across the Philippines.
          </p>
          <p className="about-us__text">
            Thank you for joining us on this journey of discovering and appreciating the artistry of Filipino craftsmanship. Explore our store and experience the magic of handmade treasures.
          </p>
          <a href="/" className="btn btn-primary">Explore Our Shop</a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
