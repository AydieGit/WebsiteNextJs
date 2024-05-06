'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { ScrollToPlugin } from "gsap/all"


gsap.registerPlugin(ScrollToPlugin)
const Routes = () => {
    useGSAP(()=>{

    }, [])
  return (
    <div className="routes-container">
        <ul>
            <li><Link href='https://github.com/AydieGit' target="_blank">GitHub</Link></li>
            <li><button onClick={()=>{gsap.to(window, {duration:2, scrollTo: 400})}}>About Me</button></li>
            <li><Link href='https://www.linkedin.com/in/szymon-kalinowski-1b05b12b3/' target="_blank">linkedin</Link></li>
        </ul>
    </div>
  )
}

export default Routes