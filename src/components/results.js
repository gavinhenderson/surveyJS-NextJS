"use client";

import { useEffect, useState } from "react";
import { Model } from "survey-core";

export default function Results({ surveyData }) {
  const [survey, setSurvey] = useState(null);
  const [vizPanel, setVizPanel] = useState(null);

  useEffect(() => {
    (async () => {
      const survey = new Model(surveyData.survey);
      setSurvey(survey);

      const { VisualizationPanel } = await import("survey-analytics");

      const currentPanel = new VisualizationPanel(
        survey.getAllQuestions(),
        surveyData.results,
        {
          allowHideQuestions: false,
        }
      );
      setVizPanel(currentPanel);
    })();
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
