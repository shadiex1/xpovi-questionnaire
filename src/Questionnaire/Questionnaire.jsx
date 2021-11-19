import React, { Component } from "react";
import styles from "./Questionnaire.module.scss";
import FormBtn from "./FormBtn/FormBtn";
import { Link } from "react-router-dom";
import { sections } from "../assets/Data";
import logo from "../assets/xpovi.png"
class Questionnaire extends Component {
  state = {
    sections,
    investment: null,
    displayBtn: false,
    currentSection: 1,

  };

  Clicked = (id, index) => {
    const { sections } = this.state;
    const current = sections.find((item) => item.id === id);

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
      this.setState({
        FormData,
      })
    
  };



  sendAnswers=()=>{
        if  (this.state.investment|| this.state.sections[3].answer=="no"){

        }else alert("please complete the questionnaire before proceeding")
    
  }
  render() {
    const { sections, currentSection } = this.state;
    return (
      <div className={styles.FormPage}>
          <div className={styles.menu}>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <h3>we have some questions so we can get in touch with you.</h3>

        <div className={styles.sectionsContainer}>
          {currentSection == 1 ? (
            <>
              {" "}
              <FormBtn section={sections} ID={0} active={this.Clicked} />
              );
              {sections[0].answer === "B2B" && (
                <FormBtn section={sections} ID={1} active={this.Clicked} />
              )}
              {sections[0].answer === "B2C" && (
                <FormBtn section={sections} ID={2} active={this.Clicked} />
              )}
              {sections[0].answer === "both" && (
                <>
                  <FormBtn section={sections} ID={1} active={this.Clicked} />
                  <FormBtn section={sections} ID={2} active={this.Clicked} />
                </>
              )}
            </>
          ) : (
            <div className={styles.InputContainer}>
              <FormBtn ID={3} section={sections} active={this.Clicked} />
              <p>how much was the investment?</p>
              <input
                type="number"
                name="investment"
                min="0"
                disabled={sections[3].answer == "no"}
                value={this.state.investment}
                onChange={(e) =>
                  this.setState({
                    investment: e.target.value,
                    displayBtn:true
                  })
                }
              />
            </div>
          )}
        </div>
        <div className={styles.next}>
          {(sections[1].answer || sections[2].answer) && (
            <button
              onClick={
                currentSection == 1
                  ? () =>
                      this.setState({
                        currentSection: 2,
                        displayBtn:false
                      })
                  : ()=>this.sendAnswers()
              }
              className={styles.btn}
            >
              next
              {console.log(this.state, "ajff")}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Questionnaire;
