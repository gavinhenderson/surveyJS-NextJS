"use client";

import { slugify } from "@/utils";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveys } from "@/data";

import styles from "./page.module.css";

export default function Page({ params: { slug } }) {
  const survey = surveys.find((x) => slugify(x.title) == slug);

  const model = new Model(survey);

  return (
    <div>
      <Survey model={model} />
    </div>
  );
}
