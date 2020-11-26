import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Spotify Clone</h1>

      <Footer />
    </div>
  );
}
