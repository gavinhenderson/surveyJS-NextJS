import { surveys } from "@/data";
import "survey-core/defaultV2.css";
import SurveyComponent from "@/components/survey";

export async function generateMetadata({ params }) {
  const survey = surveys.find((x) => x.slug === params.slug);

  return {
    title: survey.survey.title,
    description: survey.survey.description,
  };
}

export async function generateStaticParams() {
  return surveys.map((x) => ({ slug: x.slug }));
}

export default function Page({ params: { slug } }) {
  const survey = surveys.find((x) => x.slug === slug);

  return (
    <div>
      <SurveyComponent surveyData={survey.survey} />
    </div>
  );
}
