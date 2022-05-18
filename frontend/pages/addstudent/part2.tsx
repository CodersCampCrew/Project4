import React from "react";
import { minuteData, priceData } from "../../assets/carouselData";
import { Carousel } from "../../components/carousel";

import styles from "../../styles/addstudent/part2.module.css";

const AddStudent2 = () => {
  console.log();
  return (
    <div className={styles.asd}>
      <div className={styles.carouselContainer}>
        <Carousel data={priceData} />
      </div>
      <span className={styles.forSpan}>za</span>

      <div className={styles.carouselContainer}>
        <Carousel data={minuteData} />
      </div>
    </div>
  );
};

export default AddStudent2;
