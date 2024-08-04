import "survey-analytics/survey.analytics.min.css";

import { surveys } from "@/data";
import Results from "@/components/results";

export async function generateMetadata({ params }) {
  const survey = surveys.find((x) => x.slug === params.slug);

  return {
    title: `Results | ${survey.survey.title}`,
    description: survey.survey.description,
  };
}

export async function generateStaticParams() {
  return surveys
    .filter((x) => x.results.length > 0)
    .map((x) => ({ slug: x.slug }));
}

export default function Page({ params: { slug } }) {
  const survey = surveys.find((x) => x.slug === slug);

  return (
    <div>
      <Results surveyData={survey} />
    </div>
  );
}
