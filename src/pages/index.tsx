import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import stylesNew from '@/src/styles/home.module.scss';
import Footer from '../widgets/Footer';
import CustomConnectButton from '../features/CustomConnectButton';
import Header from '../widgets/Header';
import EarthBlock from '../widgets/EarthBlock';

const Home: NextPage = () => {
  return (
    <div className={stylesNew.container}>
      <Head>
          <link
              rel="preload"
              href="/fonts/MazzardH-Bold.otf"
              as="font"
              type="font/otf"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/MazzardH-Medium.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/MazzardH-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Move-X-Bold.otf"
              as="font"
              type="font/otf"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/NeueMachina-Bold.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/NeueMachina-Medium.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/NeueMachina-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/TTOctosquares-Medium.otf"
              as="font"
              type="font/otf"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/TTOctosquares-Regular.otf"
              as="font"
              type="font/otf"
              crossOrigin=""
          />
      </Head>

      <main className={stylesNew.main}>
        <Header />
        <EarthBlock />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
