import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Get Started with Our Mobile App</h1>
        <p>Experience the future of mobile apps today!</p>
        <Link href="#features">
          <a className="btn">Learn More</a>
        </Link>
        <Link href="#download">
          <a className="btn">Download Now</a>
        </Link>
        <Image src="/images/hero-image.png" alt="Hero Image" width={500} height={300} />
      </div>
    </section>
  );
}

export default Hero;