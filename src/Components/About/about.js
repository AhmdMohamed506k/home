import styles from "./about.module.css";

import React from "react";

export default function About() {
  return (
    <>
      <div id="About" className={`${styles.AboutStyle} d-flex justify-content-center align-items-center`}
      >
        <div className="text">
          <div className="starTitle">
            <div className="text-center pt-4">
              <h2 className={`${styles.title}`}>ABOUT COMPONENT</h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className={`${styles.line}`}></div>
                <i className="fa-solid fa-star" style={{ color: "#ffffff" }} />

                <div className={`${styles.line}`}></div>
              </div>
            </div>
          </div>
          <div className="contianer d-flex justify-content-center">
            <div className={`${styles.rowCustomWidth} row px-5`}>
              <div className={` col-md-6 ps-md-5`}>
                <p>
                  {" "}
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.{" "}
                </p>
              </div>
              <div className={` col-md-6  pe-5`}>
                <p>
                  {" "}
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
