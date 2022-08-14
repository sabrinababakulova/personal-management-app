import Menu from "../Menu";
import SideMenu from "../SideMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Layout = ({ children }: any) => {
  const router = useRouter();
  const route = router.pathname.split("/");
  const { data: session } = useSession();
  return (
    <>
      <Menu />
      {session && route[1] === "Personal" ? <SideMenu /> : null}
      {children}
    </>
  );
};

export default Layout;
