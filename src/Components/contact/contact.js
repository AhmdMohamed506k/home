import styles from "./contact.module.css";

import React from "react";

export default function Contact() {
  return (
    <>
      <div className={`${styles.Contactstyle}`}>
        <h2 className={`${styles.tile}`}>CONATCT SECTION</h2>
        <div className="d-flex align-items-center justify-content-center mb-3 ">
          <div className={`${styles.line}`}></div>
          <i className="fa-solid fa-star fa-sm" style={{ color: "#2c3e50" }} />

          <div className={`${styles.line}`}></div>
        </div>

        <form className="w-50 p-5 mx-auto mt-5 ">
          <label className={`${styles.lablestyle} `} for="userName">
            userName :
          </label>
          <input
            placeholder="userName"
            id="userName"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <label className="position-relative top-0" for="userAge"></label>
          <input
            id="userAge"
            placeholder="userAge"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <label className="position-relative top-0" for="userEmail"></label>
          <input
            id="userEmail"
            placeholder="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative"
          />
          <label className="position-relative top-0" for="userPassword"></label>
          <input
            id="userPassword"
            placeholder="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <button
            style={{ backgroundColor: "#1abc9c" }}
            className=" btn  mt-4 text-white"
          >
            {" "}
            send Message{" "}
          </button>
        </form>
      </div>
    </>
  );
}
