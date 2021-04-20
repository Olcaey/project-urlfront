/* eslint-disable global-require */
import { paths } from "@paths";

export const META_DEFAULTS = {
  custom: [],
  description:
    "Simple and fast Url Shortener to capture data and keep track of your audience.",
  image: `${require("../images/logo.svg")}`,
  title: "VisitMyPost Url Shortener",
  type: "website",
  url: paths.base,
};
