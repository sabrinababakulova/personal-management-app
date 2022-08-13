import Menu from "../Menu";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
const Layout = ({ children }: any) => {
  const { data: session } = useSession();
  return (
    <>
      {session ? <Menu /> : null}
      {children}
    </>
  );
};

export default Layout;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=https://sabrinastuff.vercel.app/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
