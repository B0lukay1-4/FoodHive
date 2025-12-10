import React from 'react'
import Nav from '../Components/Nav'

function About() {
  return (
    <div>
        <Nav/>
        
        <p className='about-heading'>About Us</p>
        <div className="about-head">
        <h1>Our Story & Aim</h1>
        <p>Experience the richness of Nigeria on a plate timeless recipes, bold flavors, unforgettable taste.</p>
        </div>
        <div className="about-image-story">
          <img src="Images/naija.jpg" alt=""  width={650} height={450}/>

          <div className="story">
            <h1>Our Story</h1>
            <p>At FoodHive, we believe food is more than just a meal — it’s an experience that brings people together. <br />
            Founded in 2020, our vision was simple: to create a space where authentic Nigerian <br /> flavors meet modern dining.
            Just like a hive thrives on community.<br /> <br />
            FoodHive thrives on the love we pour into every recipe and the joy we share with every guest. <br />
            We craft each dish with fresh, locally sourced ingredients, blending tradition with creativity to serve meals that spark <br />
             connection and conversation. Whether it’s your first visit or your hundredth, our promise is the same <br />
              — warm hospitality, bold flavors, and a taste of Nigeria you’ll never forget.</p>
          </div>
        </div>
    </div>
  )
}

export default About