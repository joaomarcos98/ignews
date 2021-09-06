import Head from "next/head";
import { SubcribeButton } from "../SubscribeButton";

import styles from "./home.module.scss"


export default function Home() {
  return (

    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>
          <SubcribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />

      </main>
    </>

  )
}
