"use client";

import { useCallback } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

export default function SurveyComponent({ surveyData }) {
  const model = new Model(surveyData);

  const alertResults = useCallback(async (sender) => {
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ result: sender.data }),
    });
  }, []);

  model.onComplete.add(alertResults);

  return <Survey model={model} />;
}
