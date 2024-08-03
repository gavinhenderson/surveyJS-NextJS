"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

export default function SurveyComponent({ surveyData }) {
  const model = new Model(surveyData);

  return <Survey model={model} />;
}
