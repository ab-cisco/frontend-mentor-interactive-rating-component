import React, { useState } from "react";
import cn from "classnames";
import RatingSelector from "./components/RatingSelector/RatingSelector";
import { ReactComponent as IconStar } from "./images/icon-star.svg";
import { ReactComponent as ThankYouIcon } from "./images/illustration-thank-you.svg";

import styles from "./Rating.module.scss";

const Rating = ({
  title,
  description,
  submittedTitle,
  submittedDescription,
  onSubmit,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);

  const handleSubmit = () => {
    if (!ratingValue) return;
    setIsSubmitted(true);
    onSubmit(ratingValue);
  };

  return (
    <div className={styles.contanier}>
      {isSubmitted ? (
        <div className={cn(styles.wrapper, styles.wrapperSubmitted)}>
          <div className={styles.thankYouIcon}>
            <ThankYouIcon />
          </div>
          <div className={styles.ratingSelected}>
            <span>You selected {ratingValue} out of 5</span>
          </div>
          <div className={styles.title}>
            <span>{submittedTitle}</span>
          </div>
          <div className={styles.description}>
            <span>{submittedDescription}</span>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.ratingIcon}>
            <IconStar />
          </div>
          <div className={styles.title}>
            <span>{title}</span>
          </div>
          <div className={styles.description}>
            <span>{description}</span>
          </div>
          <div className={styles.ratingSelector}>
            <RatingSelector onChange={setRatingValue} />
          </div>
          <button
            className={styles.submitButton}
            type='button'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

Rating.defaultProps = {
  title: "How did we do?",
  description:
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  onSubmit: () => {},
  submittedTitle: "Thank you!",
  submittedDescription:
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!",
};

export default Rating;
