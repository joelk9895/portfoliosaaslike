import Image from 'next/image'
import styles from './page.module.css'
import Profilecard from './component/profilecard/Profilecard'
import Map from './component/map/Map'
import Linkedin from './component/linkedin/Linkedin'
import GitHubStatsCard from './component/github/Github'

export default function Home() {
  return (
   <>
    <Profilecard />
    <Map />
    <Linkedin />
    <GitHubStatsCard />
   </>
  )
}
