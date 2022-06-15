import React from "react";
import Rating from "./components/Rating/Rating";

import styles from "./App.module.scss";

function App() {
  const handleSubmit = (rating) => {
    console.log(`Rating ${rating} submitted!`);
  };

  return (
    <div className={styles.App}>
      <Rating onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
