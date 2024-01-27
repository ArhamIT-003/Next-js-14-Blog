import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <span className={classes.span}>Special Agency</span>
        <h1 className={classes.title}>
          We created digital ideas, that are bigger, bolder, brave and better.
        </h1>
        <pv className={classes.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ut
          deserunt nisi ex quam nulla magnam? Corporis tenetur ipsa perferendis
          quas? Maiores odit amet, consequatur cupiditate fugit possimus
          adipisci assumenda.
        </pv>

        <div className={classes.boxes}>
          <div className={classes.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={classes.box}>
            <h1>234 k+</h1>
            <p>People reached</p>
          </div>
          <div className={classes.box}>
            <h1>5 K+</h1>
            <p>services and plugins</p>
          </div>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <Image
          src={"/about.png"}
          alt="About us picture"
          fill
          priority
          className={classes.img}
        />
      </div>
    </div>
  );
};

export default About;
