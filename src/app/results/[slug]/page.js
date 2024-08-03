"use client";

import { VisualizationPanel } from "survey-analytics";
import { Model } from "survey-core";
import "survey-analytics/survey.analytics.min.css";

import { surveys } from "@/data";
import { useEffect, useState } from "react";

export default function Page({ params: { slug } }) {
  const [survey, setSurvey] = useState(null);
  const [vizPanel, setVizPanel] = useState(null);

  useEffect(() => {
    const currentSurvey = surveys.find((x) => x.slug == slug);
    const survey = new Model(currentSurvey.survey);
    setSurvey(survey);

    const currentPanel = new VisualizationPanel(
      survey.getAllQuestions(),
      currentSurvey.results,
      {
        allowHideQuestions: false,
      }
    );
    setVizPanel(currentPanel);
  }, [slug]);

  useEffect(() => {
    if (vizPanel) {
      vizPanel.render("surveyVizPanel");
    }

    return () => {
      const panelElement = document.getElementById("surveyVizPanel");

      if (panelElement) {
        panelElement.innerHTML = "";
      }
    };
  }, [vizPanel]);

  return (
    <div>
      <div id="surveyVizPanel" />
    </div>
  );
}
