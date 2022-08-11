import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignIn from '../components/SignIn'
import { useSession } from 'next-auth/react'
import Menu from '../components/Menu'

const Home: NextPage = () => {

  const { data: session } = useSession();
  return (
    <div className={styles.container}>

      {!session && <main className={styles.main}>
        <SignIn />
      </main>
      }
      {session && (

        <main className={styles.main}>
          <Menu />
        </main>
      )}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>

        </a>
      </footer>
    </div>
  )
}
export default Home
