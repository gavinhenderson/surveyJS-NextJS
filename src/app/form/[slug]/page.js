"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveys } from "@/data";
import "survey-core/defaultV2.css";

export default function Page({ params: { slug } }) {
  const survey = surveys.find((x) => x.slug === slug);
  const model = new Model(survey.survey);

  return (
    <div>
      <Survey model={model} />
    </div>
  );
}
