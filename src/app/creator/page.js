"use client";

import { useEffect, useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

export default function Page() {
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
