import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Analytics from "@vercel/analytics/next"


import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
<header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <section className="hero">
          <div className="hero-title">

          </div>
          <img src="/img/misc/2.png" alt="Bannière Nepenthes" class="dark-theme-banner"/>
        </section>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="NEPENTHES est un forum RPG qui tient de la fiction spéculative, se déroulant dans une réalité contemporaine alternative.">
      <Analytics/>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
