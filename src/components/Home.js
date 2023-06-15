import React from 'react';
import style from '../styles/Home.module.css';

const Home = () => (
  <div className={style.pageContainer} data-testid="page-container">
    <h1 className={style.homePage}>Welcome to our home page!</h1>
    <p className={style.text}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusantium omnis repellat, doloribus, nemo quas ipsam sequi
      iusto ex dicta dolorum eos nulla eligendi ut maxime ipsum distinctio
      quia fugiat cum!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Excepturi, officia harum voluptate reprehenderit itaque earum. Ex sapiente ea eum
      eos quod hic doloribus corporis officiis magni. Tempore assumenda dolores quaerat!
    </p>
    <br />
    <p className={style.text}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusantium omnis repellat, doloribus, nemo quas ipsam sequi
      iusto ex dicta dolorum eos nulla eligendi ut maxime ipsum distinctio
      quia fugiat cum!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Fuga sed architecto doloribus minus aperiam non dicta, quod modi officiis
      ipsum, impedit ab beatae rem eius sint enim est. Adipisci, autem?
    </p>
  </div>
);

export default Home;
