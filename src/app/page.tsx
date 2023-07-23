import Image from 'next/image'
import styles from './page.module.css'
import Profilecard from './component/profilecard/Profilecard'
import Map from './component/map/Map'
import Linkedin from './component/linkedin/Linkedin'
import GitHubStatsCard from './component/github/Github'
import Opinio from './component/opinio/Opinio'
import Pgmatch from './component/pgmatch/Pgmatch'
import Contact from './component/contact/Contact'
import Darkmode from './component/darkmode/Darkmode'

export default function Home() {
  return (
   <>
   <nav>
    Hi
   </nav>
    <div className="widget-holder">
    <Profilecard />
    <Map />
    <Opinio/>
    <GitHubStatsCard />
   
    <Linkedin/>
    <Pgmatch/>
    <Contact/>
    <Darkmode/>
    </div>
   </>
  )
}
