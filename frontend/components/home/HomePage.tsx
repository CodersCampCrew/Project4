import Image from "next/image";
import Link from "next/link";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={classes.card}>
      <p className={classes.cardHeading}>Cześć</p>
      <p className={classes.cardText}>Na początku powiedz nam kim jesteś!</p>
      <Link href="/register" passHref>
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
      </Link>
      <Link href="/register" passHref>
        <div className={classes.cardBody}>
          <Image
            className={`${classes.img} ${classes.imgFix}`}
            width="200px"
            height="200px"
            src="https://images.unsplash.com/photo-1544717305-2782549b5136"
            alt="teacher"
          />
          <div className={`${classes.circle} ${classes.circleYellow}`}></div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
