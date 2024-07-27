import { surveys } from "@/data";
import styles from "./page.module.css";
import { SurveyListItem } from "@/components/survey-list-item";

export default function Home() {
  return (
    <main>
      <ul>
        {surveys.map((survey) => {
          return <SurveyListItem key={survey.title} survey={survey} />;
        })}
      </ul>
    </main>
  );
}
