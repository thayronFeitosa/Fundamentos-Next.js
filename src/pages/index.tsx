import Head from 'next/head';
import { SignInButton } from '../components/SignInButton';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head> <title>Hpme | ig.news</title> </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about <br/> the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
