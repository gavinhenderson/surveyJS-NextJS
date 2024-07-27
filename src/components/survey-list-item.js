import { slugify } from "@/utils";
import Link from "next/link";

export const SurveyListItem = ({ survey }) => {
  console.log(survey);
  return (
    <div>
      <p>{survey.title}</p>
      <Link href={`/form/${slugify(survey.title)}`}>Fill out form</Link>
    </div>
  );
};
