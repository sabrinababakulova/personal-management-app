import React from "react";
import { useSession } from "next-auth/react";
import SignIn from "../../components/SignIn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Personal = () => {
  const { data: session } = useSession();
  const { t } = useTranslation("common");
  return <>{!session ? <SignIn locale={t} /> : <p>{t("menu.goHome")}</p>}</>;
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
export default Personal;
