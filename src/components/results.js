"use client";

import { useEffect } from "react";
import { Model } from "survey-core";

export default function Results({ surveyData }) {
  useEffect(() => {
    (async () => {
      const survey = new Model(surveyData.survey);

      const { VisualizationPanel } = await import("survey-analytics");

      const currentPanel = new VisualizationPanel(
        survey.getAllQuestions(),
        surveyData.results,
        {
          allowHideQuestions: false,
        }
      );

      currentPanel.render("surveyVizPanel");

      return () => {
        const panelElement = document.getElementById("surveyVizPanel");

        if (panelElement) {
          panelElement.innerHTML = "";
        }
      };
    })();
  }, [surveyData]);

  return (
    <div>
      <div id="surveyVizPanel" />
    </div>
  );
}
