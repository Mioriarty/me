import Dateline from './components/Dateline.jsx'
import Masthead from './components/Masthead.jsx'
import MainNav from './components/MainNav.jsx'
import LeadStory from './components/LeadStory.jsx'
import Seam from './components/Seam.jsx'
import SectionFront from './components/SectionFront.jsx'
import Footer from './components/Footer.jsx'

import {
  site,
  nav,
  lead,
  researchSection,
  compositionSection,
  footerLinks,
} from './data/content.js'

export default function App() {
  return (
    <>
      <Dateline city={site.city} volume={site.volume} />
      <Masthead name={site.name} tagline={site.tagline} />
      <MainNav items={nav} />

      <main className="wrap">
        <LeadStory {...lead} />
        <Seam />

        <div className="sections">
          <SectionFront {...researchSection} />
          <div className="section-divider-col" />
          <SectionFront {...compositionSection} />
        </div>
      </main>

      <Footer links={footerLinks} />
    </>
  )
}
