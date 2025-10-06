import { lazy } from "react";

export const AboutPageAsync = lazy(async () => {
  await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  return import("../ui/AboutPage");
});
