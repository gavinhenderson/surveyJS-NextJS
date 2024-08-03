import { cancellation } from "./cancellation";
import { job } from "./job";
import { medical } from "./medical";
import { nps } from "./nps";
import { patient } from "./patient";
import { pizza } from "./pizza";
import { productFeedback } from "./product-feedback";

export const surveys = [
  nps,
  cancellation,
  productFeedback,
  medical,
  pizza,
  patient,
  job,
];
