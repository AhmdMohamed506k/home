import styles from "./portfolio.module.css";

import img from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

import React from "react";

function showImg() {}

export default function Portfolio() {
  return (
    <>
      <div id="Portfolio" className={`${styles.portofolio}`}>
        <h2 className={`${styles.titleStyleControl} text-center `}>
          PORTFOLIO COMPONENT
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className={`${styles.line}`}></div>
          <i className="fa-solid fa-star fa-sm" style={{ color: "#2c3e50" }} />

          <div className={`${styles.line}`}></div>
        </div>
        <div className="container ">
          <div className="row g-5   ">
            <div className="col-lg-4  col-md-4 ">
              <div className="rounded-overflow-hidden position-relative  m-auto">
                <img
                  onClick={``}
                  className="  w-100 rounded-3"
                  alt=""
                  src={img}
                />
                <div className={`${styles.layer} rounded-3`}>
                  <i className="fa-solid fa-plus fa-7x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="rounded-3 overflow-hidden position-relative  m-auto">
                <img className="  w-100 rounded-3" alt="" src={img2} />
                <div className={`${styles.layer} rounded-3`}>
                  <i className="fa-solid fa-plus fa-7x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="rounded-3 overflow-hidden position-relative  m-auto">
                <img className="  w-100 rounded-3" alt="" src={img3} />
                <div className={`${styles.layer} rounded-3`}>
                  <i className="fa-solid fa-plus fa-7x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-4 ">
              <div className="rounded-overflow-hidden position-relative  m-auto">
                <img className="  w-100 rounded-3" alt="" src={img} />
                <div className={`${styles.layer} rounded-3`}>
                  <i className="fa-solid fa-plus fa-7x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="rounded-3 overflow-hidden position-relative  m-auto">
                <img className="  w-100 rounded-3" alt="" src={img2} />
                <div className={`${styles.layer} rounded-3`}>
                  <i className="fa-solid fa-plus fa-7x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="rounded-3 overflow-hidden position-relative  m-auto">
                <img className="  w-100 rounded-3" alt="" src={img3} />
                <div className={`  ${styles.layer} rounded-3`}>
                  <i className="fa-solid fa-plus fa-7x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
