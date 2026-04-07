import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>Nereo Woodworking</title>
        <meta name="description" content={content.heroSubheading} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer />
      </Head>

      <Navbar />
      <Hero
        heading={content.heroHeading}
        subheading={content.heroSubheading}
        buttonText={content.heroButtonText}
        image={content.heroImage}
      />
      <About
        heading={content.aboutHeading}
        text={content.aboutText}
        image={content.aboutImage}
      />
      <Services
        heading={content.servicesHeading}
        services={content.services}
      />
      <Gallery
        heading={content.galleryHeading}
        images={content.galleryImages}
      />
      <Contact
        heading={content.contactHeading}
        email={content.contactEmail}
        phone={content.contactPhone}
        address={content.contactAddress}
      />
      <Footer text={content.footerText} />
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'pages', 'home.json')
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return { props: { content } }
}
