import styled from "../styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (

    <>
      <Head>
        <title>Início | Ig.news</title>
      </Head>
      <h1 className={styled.title}>Hello world!</h1>
    </>

  )
}
