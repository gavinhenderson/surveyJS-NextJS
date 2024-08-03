import Link from "next/link";

import styles from "./survey-list-item.module.css";

export const SurveyListItem = ({ survey }) => {
  return (
    <div className={styles.itemContainer}>
      <p>{survey.survey.title}</p>

      {survey.results.length > 0 && (
        <Link href={`/results/${survey.slug}`}>View Results</Link>
      )}
      <Link href={`/form/${survey.slug}`}>Fill out form</Link>
    </div>
  );
};
