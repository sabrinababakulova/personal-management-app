import Menu from "../Menu";
import SideMenu from "../SideMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Footer from "../Footer";
const Layout = ({ children }: any) => {
  const router = useRouter();
  const route = router.pathname.split("/");
  const { data: session } = useSession();
  return (
    <div className={styles.wrapper}>
      <Menu />
      {session && route[1] === "Personal" ? <SideMenu /> : null}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
