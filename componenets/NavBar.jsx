'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {

    useGSAP(()=>{
        gsap.to('#scroll',{
            scrollTrigger:{
                trigger: '#scroll',
                start: 'top top',
                end: '+=700',
                scrub: true,

            },
            y: '200vh',
            duration: 50,

        })
    }, [])

  return (
    <div>
        <Image id='scroll'src='/scroll.png' width={50} height={50}/>
        
    </div>
  )
}

export default NavBar