import { surveys } from "@/data";
import { SurveyListItem } from "@/components/survey-list-item";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContainer}>
        <Link className={styles.button} href="/creator">
          Create a new survey
        </Link>

        <div className={styles.surveyList}>
          {surveys.map((survey) => {
            return <SurveyListItem key={survey.slug} survey={survey} />;
          })}
        </div>
      </div>
    </main>
  );
}
