import React, { useState } from "react";
import Link from "next/link";
import classes from "./HeroBanner.module.scss"

const HeroBanner = () => {

  return (
    <div className={classes.heroBanner}>
      <div className={classes.heroBanner__container}>
        <div>
          <p className={classes.heroBanner__smallText}>SMALL TEXT</p>
          <h3 className={classes.heroBanner__midText}>MID TEXT</h3>
          <h1 className={classes.heroBanner__largeText}></h1>
          <img className={classes.heroBanner__image} src="" alt="headphones"/>
          <div>
            <Link href="/product/ID">
              <button className={classes.heroBanner__btn} type="button">BUTTON TEXT</button>
            </Link>
            <div className={`${classes.heroBanner__desc} ${classes.descHeroBanner}`}>
              <h5 className={classes.descHeroBanner__title}>Description</h5>
              <p className={classes.descHeroBanner__text}>DESCRIPTION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

export default HeroBanner;