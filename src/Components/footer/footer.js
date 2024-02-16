import styles from "./footer.module.css";

import React from "react";

export default function Footer() {
  return (
    <>
      <div className={`${styles.footerStyle}  `}>
        <div className={`${styles.footerStyle} Card text-center `}>
          <div className="goup d-flex justify-content-between">
            <div className={`${styles.cardcontrol}`}>
              <div className="Card">
                <div className="CardBody">
                  <h3 className={`${styles.titleControl}`}>LOCATION</h3>
                  <p className={`${styles.pfontsize}`}>
                    2215 John Daniel Drive
                  </p>
                  <p className={`${styles.pfontsize}`}>Clark, MO 65243</p>
                </div>
              </div>
            </div>
            <div className={`${styles.cardcontrol}`}>
              <div className="Card">
                <div className="cardBody  ">
                  <h3 className={`${styles.titleControl}`}>AROUND THE WEB</h3>
                </div>
                <div className={`${styles.iconsControl}`}>
                  <div>
                    <i
                      className="m-0 p-2 rounded-5 border border-1  fa-brands fa-facebook"
                      style={{ color: "#ffffff" }}
                    />
                    <i
                      className="m-1 p-2 rounded-5 border border-1 fa-brands fa-twitter"
                      style={{ color: "#ffffff" }}
                    />
                    <i className=" p-2 rounded-5 border border-1 fa-brands fa-linkedin-in" />

                    <i
                      className="m-1 p-2 rounded-5 border border-1  fa-solid fa-globe"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.cardcontrol}`}>
              <div className="Card">
                <div className="CardBody">
                  <h3 className={`${styles.titleControl}`}>ABOUT FREELANCER</h3>
                  <p className={`${styles.pfontsize}`}>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`P  `}>
        <div className={`${styles.P}  text-center `}>
          <p className={`${styles.Pcontrol}  `}>
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
