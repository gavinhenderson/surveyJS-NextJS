import Link from "next/link";

export const SurveyListItem = ({ survey }) => {
  return (
    <div>
      <p>{survey.survey.title}</p>
      <ul>
        <li>
          <Link href={`/form/${survey.slug}`}>Fill out form</Link>
        </li>
        {survey.results.length > 0 && (
          <li>
            <Link href={`/results/${survey.slug}`}>Results</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
