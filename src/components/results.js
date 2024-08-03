"use client";

import { useEffect, useState } from "react";
import { VisualizationPanel } from "survey-analytics";
import { Model } from "survey-core";

export default function Results({ surveyData }) {
  const [survey, setSurvey] = useState(null);
  const [vizPanel, setVizPanel] = useState(null);

  useEffect(() => {
    const survey = new Model(surveyData.survey);
    setSurvey(survey);

    const currentPanel = new VisualizationPanel(
      survey.getAllQuestions(),
      surveyData.results,
      {
        allowHideQuestions: false,
      }
    );
    setVizPanel(currentPanel);
  }, [surveyData]);

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
