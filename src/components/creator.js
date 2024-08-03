"use client";

import { useEffect, useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

export default function Creator() {
  let [creator, setCreator] = useState();

  useEffect(() => {
    const newCreator = new SurveyCreator({
      showLogicTab: true,
      showTranslationTab: true,
    });
    setCreator(newCreator);
  }, []);

  return <div>{creator && <SurveyCreatorComponent creator={creator} />}</div>;
}
