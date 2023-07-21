import React from 'react';
import style from '../styles/Home.module.css';

const Home = () => (
  <div className={style.pageContainer} data-testid="page-container">
    <h1 className={style.homePage}>Welcome to Math Magician - Your Ultimate Basic Calculator!</h1>
    <p className={style.text}>
      Discover the power of simplicity with our Math Magician web app - the perfect tool
      for all your basic calculations! With a sleek and intuitive design, Math
      Magician adapts effortlessly to any device, making it your everyday
      companion, whether you&apos;re studying, working, or just need a quick answer.
      Embrace the magic of numbers at your fingertips and experience the
      enchantment of effortless, accurate, and fast calculations. Join our
      growing community of math enthusiasts and let&apos;s make math magical, one
      calculation at a time. Get started now and unleash the Math Magician in
      you!
    </p>
  </div>
);

export default Home;
