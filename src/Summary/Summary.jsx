import React from "react";
import styles from "./Summary.module.scss";
import Logo from "../assets/xpovi.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-92-24.png";
const Summary = (props) => {
  const navigate = useNavigate();

  const submit = () =>
    axios({
      method: "post",
      url: "mockUrl",
      data: props.answers,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        alert("Your answers are submitted successfully");
        console.log(response);
      });
  return (
    <div className={styles.Summary}>
      <div className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          <img src={arrow} alt="arrow" />
        </button>
        <Link to={process.env.PUBLIC_URL + '/'}>
        <img src={Logo} alt="logo" />
        </Link>
      </div>

      {props.answers &&
        props.answers.map(
          (section) =>
            section.answer &&
            !section.hidden && (
              <div key={section.title} className={styles.section}>
                <h2>{section.title}</h2>
                <p>{section.answer}</p>
              </div>
            )
        )}
      <button className={styles.submit} onClick={() => submit()}>
        <p>Submit</p>
      </button>
    </div>
  );
};

export default Summary;
