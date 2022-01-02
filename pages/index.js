// Nextjs imports
import Head from 'next/head'

// Component imports
import NavLink from '../components/navLink'



export default function Home() {
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <h1>Welcome!</h1>
      <NavLink href={"/projects"} text={"Projects"}/>
      <NavLink href="/about" text={"About"}/>
    </div>
    )
}
