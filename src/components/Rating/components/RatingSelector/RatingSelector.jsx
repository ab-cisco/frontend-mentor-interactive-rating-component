import React, { useState } from "react";
import cn from "classnames";

import styles from "./RatingSelector.module.scss";

const RatingSelector = ({ onChange }) => {
  const ratingInititalState = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  };
  const [ratingValues, setRatingValues] = useState(ratingInititalState);

  const handleClick = (event) => {
    const ratingValue = event.target.outerText;

    setRatingValues(() => ({
      ...ratingInititalState,
      [ratingValue]: "active",
    }));

    onChange(ratingValue);
  };

  return (
    <div className={styles.contanier}>
      {Object.entries(ratingValues).map((value, _) => {
        const [rating, status] = value;
        return (
          <div
            key={`rating-key-${rating}`}
            className={cn(styles.button, {
              [styles.buttonActive]: status === "active",
            })}
            onClick={handleClick}
          >
            <span className={styles.text}>{rating}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RatingSelector;
