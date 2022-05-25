import React from "react";
import classes from "../styles/userpage.module.css";
import { Image } from "react-bootstrap";
const UserPage = () => {
  return (
    <div>
      {" "}
      UserPage
      <div className={classes.cardBody}>
        <Image
          className={classes.img}
          width="200px"
          height="200px"
          src="https://images.unsplash.com/photo-1562246229-37b3aca47e18"
          alt="student"
        />
        <div className={`${classes.circle} ${classes.circleGreen}`}></div>
      </div>
    </div>
  );
};

export default UserPage;
