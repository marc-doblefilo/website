import Head from "next/head";
import { NavBar } from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doblefilo - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <div className={styles.main}>
          <h1 className={styles.title}>Coming soon</h1>
        </div>
      </main>
    </div>
  );
}
