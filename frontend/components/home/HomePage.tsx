/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.card}>
      <p className={classes.cardHeading}>Cześć</p>
      <p className={classes.cardText}>Na początku powiedz nam kim jesteś!</p>
      <Link href="/register" passHref>
        <div className={classes.cardBody}>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1562246229-37b3aca47e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="student"
          />
          <div className={`${classes.circle} ${classes.circleGreen}`}></div>
        </div>
      </Link>
      <Link href="/register" passHref>
        <div className={classes.cardBody}>
          <img
            className={`${classes.img} ${classes.imgFix}`}
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="teacher"
          />
          <div className={`${classes.circle} ${classes.circleYellow}`}></div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
