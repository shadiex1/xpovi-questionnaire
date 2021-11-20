import React from "react";
import { Component } from "react";
import styles from "./FormBtn.module.scss";

class FormBtn extends Component {
  render() {
    const { section, ID, active } = this.props;

    return (
      <div className={styles.section}>
        <p className={styles.title}>{section[ID].title}</p>
        {section[ID].options.map((option, i) => {
          return (
            <button
              onClick={() => active(section[ID].id, i)}
              style={{
                backgroundColor: option.selected && " #13d79d",
                color: "white",
              }}
              className={styles.FormBtn}
            >
              <p
                style={{
                  color: option.selected && "white",
                }}
              >
                {option.choice}
              </p>
            </button>
          );
        })}
      </div>
    );
  }
}

export default FormBtn;
