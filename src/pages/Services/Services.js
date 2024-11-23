import React from "react";
import classes from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faSketch,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section className={classes.section}>
      {/* Section Title */}
      <div className={classes.sectionTitle}>
        <h2>services</h2>
        <div className={classes.underline}></div>
      </div>
      {/* End of Section Title */}
      <div className={classes.servicesCenter}>
        {/* Single Service */}
        <article className={classes.service}>
          <FontAwesomeIcon icon={faCode} className={classes.serviceIcon} />
          <h4>web development</h4>
          <div className={classes.underline}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </article>
        {/* End of Single Service */}
        {/* Single Service */}
        <article className={classes.service}>
          <FontAwesomeIcon icon={faSketch} className={classes.serviceIcon} />
          <h4>web design</h4>
          <div className={classes.underline}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </article>
        {/* End of Single Service */}
        {/* Single Service */}
        <article className={classes.service}>
          <FontAwesomeIcon icon={faAndroid} className={classes.serviceIcon} />
          <h4>app design</h4>
          <div className={classes.underline}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </article>
        {/* End of Single Service */}
      </div>
    </section>
  );
};

export default Services;
