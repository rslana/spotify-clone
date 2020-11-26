import Head from "next/head";
import Footer from "../components/Footer";

export default function Playlist() {
  return (
    <div>
      <Head>
        <title>Playlist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Playlist</h1>

      <Footer />
    </div>
  );
}
