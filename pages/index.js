import Head from "next/head";
import SideNav from "../components/Layout/SideNav";
import List from "../components/List/List";
export default function Home() {
  return (
    <>
      <Head>
        <title>Zeta</title>
        <meta name="description" content="Zeta" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <SideNav>
        <List />
      </SideNav>
    </>
  );
}
