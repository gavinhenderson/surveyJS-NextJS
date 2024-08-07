"use client";

import { useEffect, useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

import styles from "./creator.module.css";

export default function Creator() {
  let [creator, setCreator] = useState();

  useEffect(() => {
    const newCreator = new SurveyCreator({
      showLogicTab: true,
      showTranslationTab: true,
    });
    setCreator(newCreator);
  }, []);

  return (
    <div className={styles.container}>
      {creator && <SurveyCreatorComponent creator={creator} />}
    </div>
  );
}
