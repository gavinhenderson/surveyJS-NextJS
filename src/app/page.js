import { surveys } from "@/data";
import { SurveyListItem } from "@/components/survey-list-item";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Link href="/creator">Create a new survey</Link>
      <ul>
        {surveys.map((survey) => {
          return <SurveyListItem key={survey.slug} survey={survey} />;
        })}
      </ul>
    </main>
  );
}
