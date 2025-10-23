import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import FirstLayout from '@/widgets/MintBlock';
import cl from 'classnames';
import stylesNew from '@/styles/home.module.scss';

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

      <main className={cl(stylesNew.section, stylesNew.sectionMain, stylesNew.main)}>
        <Header />
        <FirstLayout />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
