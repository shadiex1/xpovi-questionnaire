import React from "react";
import styles from "./Home.module.scss";
import logo from "../assets/xpovi.png";
import { useNavigate,Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Home}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Link to={process.env.PUBLIC_URL + '/form'}>
        <p>generate business plan</p>
      </Link>
    </div>
  );
};

export default Home;
