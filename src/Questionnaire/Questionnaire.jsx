import React, { useState } from "react";
import styles from "./Questionnaire.module.scss";
import FormBtn from "./FormBtn/FormBtn";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../assets/Data";
import logo from "../assets/xpovi.png";
import arrow from "../assets/arrow-92-24.png";
const Questionnaire = (props) => {
  const [sections, setSections] = useState(data);
  const [investment, setInvestment] = useState(null);
  const [currentSection, setcurrentsection] = useState(1);
  const navigate = useNavigate();

  const Clicked = (id, index) => {
    const data = [...sections];
    const current = data.find((item) => item.id === id);

    if (current.answer) {
      current.options.find(
        (option) => option.choice === current.answer
      ).selected = false; //remove green selection
      current.answer = current.options[index].choice; /// save answer
      current.options.find(
        (option) => option.choice === current.answer
      ).selected = true; //add new green selection
    } else {
      current.answer = current.options[index].choice; /// save answer
      current.options.find(
        (option) => option.choice === current.answer
      ).selected = true; //add green selection
    }
    setSections(data);
  };
  const sendAnswers = () => {
    if (investment || sections[3].answer == "no") {
      props.setAnswer([
        {
          title: sections[0].title,
          answer: sections[0].answer,
        },
        {
          title: sections[1].title,
          answer: sections[1].answer,
        },
        {
          title: sections[2].title,
          answer: sections[2].answer,
        },
        {
          title: sections[3].title,
          answer: sections[3].answer,
        },
        {
          title: "investment",
          answer: investment,
          hidden: sections[3].answer === "no",
        },
      ]);
      navigate(`${process.env.PUBLIC_URL + '/summary'}`);
    } else alert("please complete the questionnaire before proceeding");
  };
  return (
    <div className={styles.FormPage}>
      <button onClick={() => navigate(-1)} className={styles.back}>
        <img src={arrow} alt="arrow" />
      </button>
<Link to={process.env.PUBLIC_URL + '/'}>
      <img src={logo} alt="logo" />
      </Link>

      <h3>we have some questions so we can get in touch with you.</h3>

      <div className={styles.sectionsContainer}>
        {currentSection == 1 ? (
          <>
            {" "}
            <FormBtn section={sections} ID={0} active={Clicked} />
            {sections[0].answer === "B2B" && (
              <FormBtn section={sections} ID={1} active={Clicked} />
            )}
            {sections[0].answer === "B2C" && (
              <FormBtn section={sections} ID={2} active={Clicked} />
            )}
            {sections[0].answer === "both" && (
              <>
                <FormBtn section={sections} ID={1} active={Clicked} />
                <FormBtn section={sections} ID={2} active={Clicked} />
              </>
            )}
          </>
        ) : (
          <div className={styles.InputContainer}>
            <FormBtn ID={3} section={sections} active={Clicked} />
            <p>how much was the investment?</p>
            <input
              type="number"
              name="investment"
              min="0"
              disabled={sections[3].answer == "no"}
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className={styles.next}>
        {(sections[1].answer || sections[2].answer) && (
          <button
            onClick={
              currentSection == 1
                ? () => setcurrentsection(2)
                : () => sendAnswers()
            }
            className={styles.btn}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
