import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignIn from "../components/SignIn";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      {!session ? (
        <main className={styles.main}>
          <SignIn />
        </main>
      ) : (
        <main className={styles.main}>
          <p>Hello World!</p>
        </main>
      )}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default Home;

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
