import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mobile App Landing Page</title>
        <meta name="description" content="Mobile App Landing Page" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}

export default Home;