import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "next-i18next";
const Blog = () => {
  const { t } = useTranslation("common");
  return <div>{t("blog.errMsg")}</div>;
};
// @ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default Blog;
