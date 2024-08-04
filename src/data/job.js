export const job = {
  slug: "job",
  results: [],
  survey: {
    title: "Job Application Form",
    description:
      "Thank you for your interest in working with us. Please fill out the form and send your application. We will get back to you within a week.",
    logo: "https://api.surveyjs.io/private/Surveys/files?name=b4b071f2-c1f1-4887-a1de-8323825141b6",
    logoHeight: "100px",
    logoFit: "cover",
    logoPosition: "right",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "personal-info",
            title: "Personal Information",
            elements: [
              {
                type: "text",
                name: "first-name",
                title: "First name",
                isRequired: true,
              },
              {
                type: "text",
                name: "last-name",
                startWithNewLine: false,
                title: "Last name",
                isRequired: true,
              },
              {
                type: "text",
                name: "birthdate",
                title: "Date of birth",
                isRequired: true,
                inputType: "date",
              },
            ],
          },
          {
            type: "text",
            name: "email",
            title: "Email",
            inputType: "email",
            placeholder: "mail@example.com",
          },
          {
            type: "text",
            name: "salary",
            title: "Expected salary (in US dollars)",
            validators: [
              {
                type: "numeric",
              },
            ],
            inputType: "number",
          },
          {
            type: "text",
            name: "start-date",
            title: "Date available to start work",
            isRequired: true,
            inputType: "date",
          },
          {
            type: "file",
            name: "resume",
            title: "Upload your resume",
            acceptedTypes: "application/pdf",
          },
        ],
      },
    ],
    showQuestionNumbers: "off",
    questionErrorLocation: "bottom",
    completeText: "Send",
    widthMode: "static",
    width: "800px",
  },
};
