import React from 'react'
import styles from './Home.module.css'

import img from '../../assets/images/avataaars.svg'

export default function home() {
  return (
    <>
       <div className={`${styles.HomeStyle} home d-flex justify-content-center align-items-center text-white`}>
        <div className='text-center mb-5'>
            <img  className={`${styles.imgstyle}  `} src={img} alt="" />
            <h2 className={`${styles.title}`} >START FRAMEWORK</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className={`${styles.line}`}></div>
                <i className="fa-solid fa-star" style={{ color: "#ffffff" }} />

                <div className={`${styles.line}`}></div>
              </div>
              <div>Graphic Artist - Web Designer - Illustrator</div>
       




        </div>

         
       </div>
      
    </>
  )
}
